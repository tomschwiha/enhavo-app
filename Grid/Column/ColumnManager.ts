import ColumnInterface from "@enhavo/app/Grid/Column/ColumnInterface";
import ColumnRegistry from "@enhavo/app/Grid/Column/ColumnRegistry";
import * as _ from 'lodash';
import ComponentRegistryInterface from "@enhavo/core/ComponentRegistryInterface";

export default class ColumnManager
{
    public columns: ColumnInterface[];

    private readonly registry: ColumnRegistry;
    private readonly componentRegistry: ComponentRegistryInterface;

    constructor(columns: ColumnInterface[], registry: ColumnRegistry, componentRegistry: ComponentRegistryInterface)
    {
        this.componentRegistry = componentRegistry;
        this.registry = registry;
        this.columns = columns;
    }

    init() {
        for (let i in this.columns) {
            let filter = this.registry.getFactory(this.columns[i].component).createFromData(this.columns[i]);
            _.extend(this.columns[i], filter);
        }

        for (let component of this.registry.getComponents()) {
            this.componentRegistry.registerComponent(component.name, component.component)
        }

        this.componentRegistry.registerData(this.columns);
        this.componentRegistry.registerStore('columnManager', this);
    }

    getSortingParameters()
    {
        let parameters = [];
        for(let column of this.columns) {
            if(column.directionDesc != null) {
                parameters.push({
                   property: column.sortingProperty,
                   direction:  column.directionDesc ? 'desc' : 'asc'
                });
            }
        }
        return parameters;
    }
}
