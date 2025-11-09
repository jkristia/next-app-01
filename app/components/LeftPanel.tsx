import Link from 'next/link';
import styles from './LeftPanel.module.scss';

export default function LeftPanel() {
    return (
        <aside className={styles.leftPanel}>
            <h3>Left Panel</h3>
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