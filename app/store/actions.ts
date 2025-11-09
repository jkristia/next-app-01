"use server";

import { revalidatePath } from 'next/cache';
import { getStore } from './store';
import type { Settings } from './store';

// Unified Server Action: Update any subset of Settings and revalidate the home path
// Pass a partial Settings object; unspecified keys remain unchanged.
export async function updateSettingsAction(settings: Partial<Settings>) {
    const store = await getStore();
    // Merge incoming settings with existing ones
    store.config.settings = { ...store.config.settings, ...settings };
    // Revalidate the home page so server components read the updated values
    revalidatePath('/');
}
