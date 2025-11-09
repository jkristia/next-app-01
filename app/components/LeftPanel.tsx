import Link from 'next/link';
import styles from './LeftPanel.module.scss';
import { getStore } from '../store/store';

export default async function LeftPanel() {
    const store = await getStore();
    return (
        <aside className={styles.leftPanel}>
            <h3>Left Panel</h3>
            <div className={styles.storeLabel}>propA: {store.config.time}</div>
            <div className={styles.storeLabel}>propB: {store.config.settings.propB}</div>
            <div className={styles.storeLabel}>check: {store.config.settings.check ? 'true' : 'false'}</div>
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