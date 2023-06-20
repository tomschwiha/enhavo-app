import { Registry } from "@enhavo/core";
import BatchFactoryInterface from "@enhavo/app/Grid/Batch/BatchFactoryInterface";
import RegistryInterface from "@enhavo/core/RegistryInterface";

export default class BatchRegistry extends Registry
{
    getFactory(name: string): BatchFactoryInterface {
        return <BatchFactoryInterface>super.getFactory(name);
    }

    register(name: string, component: object, factory: BatchFactoryInterface): RegistryInterface
    {
        return super.register(name, component, factory);
    }
}
