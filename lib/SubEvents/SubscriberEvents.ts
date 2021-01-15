import type { IOClient } from 'io.wolf.js';

export default class BlockedEvents {
    protected IOClient: IOClient;

    constructor(ioClient: IOClient) {
        this.IOClient = ioClient;
    }

    set BlockAdded(fn: (data: any) => void) { this.IOClient.On('subscriber block add', fn); };

    set BlockRemoved(fn: (data: any) => void) { this.IOClient.On('subscriber block delete', fn); };
    
    set ContactAdded(fn: (data: any) => void) { this.IOClient.On('subscriber contact add', fn); };

    set ContactRemoved(fn: (data: any) => void) { this.IOClient.On('subscriber contact delete', fn); };

    set Updated(fn: (data: any) => void) { this.IOClient.On('subscriber update', fn); };

    set PresenceUpdated(fn: (data: any) => void) { this.IOClient.On('presence update', fn); };
}