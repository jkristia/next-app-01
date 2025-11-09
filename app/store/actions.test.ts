import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock next/cache's revalidatePath
vi.mock('next/cache', () => ({
    revalidatePath: vi.fn(),
}));

// Mock getStore - use a factory function to avoid hoisting issues
vi.mock('./store', () => ({
    getStore: vi.fn(),
}));

// Import after mocks so actions.ts picks up the mocked deps
import { updateSettingsAction } from './actions';
import { revalidatePath } from 'next/cache';
import { getStore } from './store';

describe('updateSettingsAction', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('merges partial settings and preserves other keys; triggers revalidation', async () => {
        const fakeStore: any = {
            config: {
                time: 't0',
                settings: { propB: 'oldB', check: false },
            },
        };
        vi.mocked(getStore).mockResolvedValueOnce(fakeStore);

        await updateSettingsAction({ check: true });

        expect(fakeStore.config.settings).toEqual({ propB: 'oldB', check: true });
        expect(revalidatePath).toHaveBeenCalledTimes(1);
        expect(revalidatePath).toHaveBeenCalledWith('/');
    });

    it('can update another field without affecting check', async () => {
        const fakeStore: any = {
            config: {
                time: 't0',
                settings: { propB: 'B0', check: true },
            },
        };
        vi.mocked(getStore).mockResolvedValueOnce(fakeStore);

        await updateSettingsAction({ propB: 'B1' });

        expect(fakeStore.config.settings).toEqual({ propB: 'B1', check: true });
    });
});
