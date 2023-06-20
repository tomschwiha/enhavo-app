import EventDispatcher from "@enhavo/app/ViewStack/EventDispatcher";
import View from "@enhavo/app/View/View";
import UpdatedEvent from "@enhavo/app/ViewStack/Event/UpdatedEvent";
import CloseEvent from "@enhavo/app/ViewStack/Event/RemoveEvent";
import ComponentRegistryInterface from "@enhavo/core/ComponentRegistryInterface";
import FlashMessenger from "@enhavo/app/FlashMessage/FlashMessenger";

export default class DeleteApp
{
    public data: any;
    private readonly eventDispatcher: EventDispatcher;
    private readonly view: View;
    private readonly flashMessenger: FlashMessenger;
    private readonly componentRegistry: ComponentRegistryInterface;

    constructor(
        data: any,
        eventDispatcher: EventDispatcher,
        view: View,
        flashMessenger: FlashMessenger,
        componentRegistry: ComponentRegistryInterface
    ) {
        this.data = data;
        this.eventDispatcher = eventDispatcher;
        this.view = view;
        this.flashMessenger = flashMessenger;
        this.componentRegistry = componentRegistry;
    }

    init() {
        this.componentRegistry.registerStore('deleteApp', this);
        this.componentRegistry.registerData(this.data);

        this.view.init();
        this.flashMessenger.init();
        this.view.addDefaultCloseListener();

        this.eventDispatcher.dispatch(new UpdatedEvent(this.view.getId()));

        this.view.ready();
    }

    close() {
        this.eventDispatcher.dispatch(new CloseEvent(this.view.getId()));
    }
}
