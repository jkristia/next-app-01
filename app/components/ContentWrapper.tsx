import type { ReactNode } from 'react';
import styles from './ContentWrapper.module.scss';
import type { Store } from '../store/store';

export default function ContentWrapper({ children, store }: { children: ReactNode; store: Store }) {
    return (
        <main className={styles.content}>
            <div className={styles.storeLabel}>propA: {store.config.propA}</div>
            {children}
        </main>
    );
}