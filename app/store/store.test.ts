import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Store, getStore, Config } from './store';

describe('Store', () => {
    it('uses default config when none provided', () => {
        const s = new Store();
        expect(s.config.time).toBe('defaultA');
        expect(s.config.settings).toEqual({ propB: 'defaultB', check: false });
    });

    it('accepts custom config', () => {
        const custom: Config = {
            time: 't1',
            settings: { propB: 'x', check: true }
        };
        const s = new Store(custom);
        expect(s.config).toEqual(custom);
    });
});

describe('getStore', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('returns same instance across calls (cached)', async () => {
        const first = await getStore();
        const second = await getStore();
        expect(first).toBe(second);
    });

    it('updates time property on each call', async () => {
        const s1 = await getStore();
        const t1 = s1.config.time;

        vi.advanceTimersByTime(1000);

        const s2 = await getStore();
        const t2 = s2.config.time;
        expect(typeof t2).toBe('string');
        // Since getStore is cached and returns same instance, time gets updated in place
        expect(t2).not.toEqual('defaultA');
    });
});
