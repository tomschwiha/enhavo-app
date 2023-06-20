import { Registry } from "@enhavo/core";
import MenuFactoryInterface from "@enhavo/app/Menu/MenuFactoryInterface";
import RegistryInterface from "@enhavo/core/RegistryInterface";

export default class MenuRegistry extends Registry
{
    getFactory(name: string): MenuFactoryInterface {
        return <MenuFactoryInterface>super.getFactory(name);
    }

    register(name: string, component: object, factory: MenuFactoryInterface): RegistryInterface {
        return super.register(name, component, factory);
    }
}
