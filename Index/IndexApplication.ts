import IndexApp from "@enhavo/app/Index/IndexApp";
import Application from "@enhavo/app/Application";
import AppInterface from "@enhavo/app/AppInterface";
import ActionAwareApplication from "@enhavo/app/Action/ActionAwareApplication";
import Grid from "@enhavo/app/Grid/Grid";
import FilterManager from "@enhavo/app/Grid/Filter/FilterManager";
import FilterRegistry from "@enhavo/app/Grid/Filter/FilterRegistry";
import ColumnManager from "@enhavo/app/Grid/Column/ColumnManager";
import ColumnRegistry from "@enhavo/app/Grid/Column/ColumnRegistry";
import BatchManager from "@enhavo/app/Grid/Batch/BatchManager";
import BatchRegistry from "@enhavo/app/Grid/Batch/BatchRegistry";

export class IndexApplication extends Application implements ActionAwareApplication
{
    protected grid: Grid;
    protected filterManager: FilterManager;
    protected filterRegistry: FilterRegistry;
    protected columnManager: ColumnManager;
    protected columnRegistry: ColumnRegistry;
    protected batchManager: BatchManager;
    protected batchRegistry: BatchRegistry;

    constructor()
    {
        super();
    }

    public getApp(): AppInterface
    {
        if(this.app == null) {
            this.app = new IndexApp(this.getDataLoader(), this.getEventDispatcher(), this.getView(), this.getActionManager());
        }
        return this.app;
    }

    public getGrid(): Grid
    {
        if(this.grid == null) {
            this.grid = new Grid(
                this.getFilterManager(),
                this.getColumnManager(),
                this.getBatchManager(),
                this.getRouter(),
                this.getEventDispatcher(),
                this.getDataLoader().load().grid,
                this.getView(),
                this.getTranslator(),
                this.getFlashMessenger(),
            );
        }
        return this.grid;
    }

    public getFilterManager(): FilterManager
    {
        if(this.filterManager == null) {
            this.filterManager = new FilterManager(this.getDataLoader().load().grid.filters, this.getFilterRegistry());
        }
        return this.filterManager;
    }

    public getFilterRegistry(): FilterRegistry
    {
        if(this.filterRegistry == null) {
            this.filterRegistry = new FilterRegistry();
        }
        return this.filterRegistry;
    }

    public getColumnManager(): ColumnManager
    {
        if(this.columnManager == null) {
            this.columnManager = new ColumnManager(this.getDataLoader().load().grid.columns, this.getColumnRegistry());
        }
        return this.columnManager;
    }

    public getColumnRegistry(): ColumnRegistry
    {
        if(this.columnRegistry == null) {
            this.columnRegistry = new ColumnRegistry();
        }
        return this.columnRegistry;
    }

    public getBatchManager(): BatchManager
    {
        if(this.batchManager == null) {
            this.batchManager = new BatchManager(this.getDataLoader().load().grid, this.getBatchRegistry(), this.getView(), this.getTranslator());
        }
        return this.batchManager;
    }

    public getBatchRegistry(): BatchRegistry
    {
        if(this.batchRegistry == null) {
            this.batchRegistry = new BatchRegistry();
        }
        return this.batchRegistry;
    }
}

let application = new IndexApplication();
export default application;