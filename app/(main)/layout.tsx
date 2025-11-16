import type { ReactNode } from 'react';

export default async function RootLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <p>rootlayout</p>
            <div className='tab-list'>
                <div className='tab-item'>
                    <a href="/">Home</a>
                </div>
                <div className='tab-item'>
                    <a href="/tab1">Tab1</a>
                </div>
                <div className='tab-item'>
                    <a href="/tab2">Tab2</a>
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
}