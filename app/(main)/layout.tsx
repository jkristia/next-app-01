import type { ReactNode } from 'react';
import MainNavigation from '../components/main/MainNavigation';

export default async function RootLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <p>rootlayout</p>
            <MainNavigation />
            <div>{children}</div>
        </div>
    );
}