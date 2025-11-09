"use client";

import { useState, useRef, useEffect } from 'react';
import { updateSettingsAction } from '../store/actions';
import type { Settings } from '../store/store';

interface HomePageConfigFormProps {
    currentSettings: Settings;
}

export default function HomePageConfigForm({ currentSettings }: HomePageConfigFormProps) {
    const [propB, setPropB] = useState(currentSettings?.propB ?? '');
    const [check, setCheck] = useState(currentSettings?.check ?? false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component unmounting - cleanup!');
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    const handlePropBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setPropB(newValue);

        // Clear existing timer
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        // Set new timer to update after 200ms
        timerRef.current = setTimeout(async () => {
            await updateSettingsAction({ propB: newValue });
        }, 200);
    };

    const handleCheckChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked;
        setCheck(newValue);
        await updateSettingsAction({ check: newValue });
    };

    return (
        <div style={{ marginTop: '1rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>
                <label style={{ marginRight: '.5rem' }}>
                    propB:
                    <input
                        name="propB"
                        value={propB}
                        onChange={handlePropBChange}
                        placeholder="Enter propB"
                        style={{ marginLeft: '.5rem' }}
                    />
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={check}
                        onChange={handleCheckChange}
                        style={{ marginRight: '.5rem' }}
                    />
                    Check
                </label>
            </div>
        </div>
    );
}
