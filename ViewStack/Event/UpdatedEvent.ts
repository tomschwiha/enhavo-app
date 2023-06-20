import Event from "./Event"

export default class LoadedEvent extends Event
{
    id: number;
    data: any;

    constructor(id: number, data?: any)
    {
        super('updated');
        this.id = id;
        this.data = data;
    }
}