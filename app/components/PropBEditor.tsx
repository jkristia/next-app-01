"use client";

import { useState } from 'react';
import { updatePropBAction } from '../store/actions';

export default function PropBEditor({ initial }: { initial: string }) {
    const [value, setValue] = useState(initial ?? '');

    return (
        <form action={updatePropBAction} style={{ marginTop: '1rem' }}>
            <label style={{ marginRight: '.5rem' }}>
                propB:
                <input
                    name="propB"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter propB"
                    style={{ marginLeft: '.5rem' }}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
