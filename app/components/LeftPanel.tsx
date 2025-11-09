import Link from 'next/link';
import styles from './LeftPanel.module.scss';
import type { Store } from '../store/store';

export default function LeftPanel({ store }: { store: Store }) {
    return (
        <aside className={styles.leftPanel}>
            <h3>Left Panel</h3>
            <div className={styles.storeLabel}>propA: {store.config.propA}</div>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href="/">Overview</Link></li>
                    <li><Link href="/reports">Reports</Link></li>
                    <li><Link href="/settings">Settings</Link></li>
                </ul>
            </nav>
        </aside>
    );
}