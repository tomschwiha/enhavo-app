import AbstractWidget from "@enhavo/app/Toolbar/Widget/Model/AbstractWidget";
import ClearEvent from "@enhavo/app/ViewStack/Event/ClearEvent";
import CreateEvent from "@enhavo/app/ViewStack/Event/CreateEvent";
import EventDispatcher from "@enhavo/app/ViewStack/EventDispatcher";
import MenuManager from "@enhavo/app/Menu/MenuManager";

export default class IconWidget extends AbstractWidget
{
    public icon: string;
    public label: string;
    public url: string;
    public target: string;

    private readonly eventDispatcher: EventDispatcher;
    private readonly menuManager: MenuManager;

    constructor(eventDispatcher: EventDispatcher, menuManager: MenuManager) {
        super();
        this.eventDispatcher = eventDispatcher;
        this.menuManager = menuManager;
    }

    private openView(url: string, label: string)
    {
        this.eventDispatcher.dispatch(new ClearEvent())
            .then(() => {
                this.eventDispatcher
                    .dispatch(new CreateEvent({
                        label: label,
                        component: 'iframe-view',
                        url: url
                    }))
                    .then(() => {
                        this.menuManager.clearSelections();
                    });
            })
            .catch(() => {})
        ;
    }

    public open()
    {
        if(this.target == '_view') {
            this.openView(this.url, this.label);
        } else if(this.target == '_self') {
            window.location.href = this.url;
        } else if(this.target == '_blank') {
            window.open(this.url, '_blank');
        }
    }
}