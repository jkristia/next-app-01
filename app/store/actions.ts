"use server";

import { revalidatePath } from 'next/cache';
import { getStore } from './store';

// Server Action: Update config.propB and revalidate the home path to reflect changes
export async function updatePropBAction(formData: FormData) {
    const value = String(formData.get('propB') ?? '');
    const store = await getStore();
    store.config.propB = value;
    // Revalidate the home page so server components read the updated value
    revalidatePath('/');
}
