import { EventEmitter } from 'events';
import type { IOClient } from 'io.wolf.js';
import GroupEvents from './SubEvents/GroupEvents';
import IOEvents from './SubEvents/IOEvents';
import SubscriberEvents from './SubEvents/SubscriberEvents';
import TipEvents from './SubEvents/TipEvents';
import WolfEvents from './SubEvents/WolfEvents';

export default class Events {
    private IOClient: IOClient
    private Emitter: EventEmitter;
    public Group: GroupEvents;
    public IO: IOEvents;
    public Subscriber: SubscriberEvents;
    public Tip: TipEvents;
    public Wolf: WolfEvents;

    constructor(ioClient: IOClient) {
        this.IOClient = ioClient;
        this.Emitter = new EventEmitter();
        this.Emitter.setMaxListeners(Number.MAX_SAFE_INTEGER);

        this.Group = new GroupEvents(this.IOClient);
        this.IO = new IOEvents(this.IOClient);
        this.Subscriber = new SubscriberEvents(this.IOClient);
        this.Tip = new TipEvents(this.IOClient);
        this.Wolf = new WolfEvents(this.IOClient);
    }
}