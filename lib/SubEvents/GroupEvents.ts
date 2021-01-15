import type { IOClient } from 'io.wolf.js';

export default class BlockedEvents {
    protected IOClient: IOClient;

    constructor(ioClient: IOClient) {
        this.IOClient = ioClient;
    }

    set AudioConfigUpdated(fn: (data: any) => void) { this.IOClient.On('group audio configuration update', fn); };

    set AudioCountUpdated(fn: (data: any) => void) { this.IOClient.On('group audio count update', fn); };

    set MemberJoined(fn: (data: any) => void) { this.IOClient.On('group member add', fn); };

    set MemberUpdated(fn: (data: any) => void) { this.IOClient.On('group member updated', fn); };

    set MemberRemoved(fn: (data: any) => void) { this.IOClient.On('group member delete', fn); };

    set Updated(fn: (data: any) => void) { this.IOClient.On('group update', fn); };
}