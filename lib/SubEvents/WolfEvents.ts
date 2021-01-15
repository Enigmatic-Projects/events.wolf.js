import type { IOClient } from 'io.wolf.js';

export default class BlockedEvents {
    protected IOClient: IOClient;

    constructor(ioClient: IOClient) {
        this.IOClient = ioClient;
    }

    set Welcome(fn: (data: any) => void) { this.IOClient.On('welcome', fn); };
}