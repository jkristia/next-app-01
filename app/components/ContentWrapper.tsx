import type { ReactNode } from 'react';
import styles from './ContentWrapper.module.scss';

export default function ContentWrapper({ children }: { children: ReactNode }) {
    return (
        <main className={styles.content}>
            {children}
        </main>
    );
}