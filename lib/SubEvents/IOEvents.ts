import type { IOClient } from 'io.wolf.js';

export default class BlockedEvents {
    protected IOClient: IOClient;

    constructor(ioClient: IOClient) {
        this.IOClient = ioClient;
    }

    set Connected(fn: () => void) { this.IOClient.On('connect', fn); };

    set Connecting(fn: () => void) { this.IOClient.On('connecting', fn); };

    set Disconnected(fn: () => void) { this.IOClient.On('disconnected', fn); };

    set Reconnecting(fn: () => void) { this.IOClient.On('reconnecting', fn); };

    set Reconnected(fn: () => void) { this.IOClient.On('reconnected', fn); };

    set ReconnectFailed(fn: () => void) { this.IOClient.On('reconnect failed', fn); };

    set ConnectionError(fn: () => void) { this.IOClient.On('connect error', fn); };

    set Pinged(fn: () => void) { this.IOClient.On('ping', fn); };

    set Ponged(fn: () => void) { this.IOClient.On('pong', fn); };
}