import type { ReactNode } from 'react';
import styles from './ContentWrapper.module.scss';
import { getStore } from '../store/store';

export default async function ContentWrapper({ children }: { children: ReactNode }) {
    const store = await getStore();
    return (
        <main className={styles.content}>
            <div>ContentWrapper</div>
            <div className={styles.storeLabel}>propA: {store.config.time}</div>
            {children}
        </main>
    );
}