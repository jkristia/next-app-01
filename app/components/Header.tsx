import styles from './Header.module.scss';
import clsx from 'clsx';
import { getStore } from '../store/store';

export default async function Header() {
    const store = await getStore();
    return (
        <header className={clsx(styles.header, styles.secondary)}>
            <h1>My App Header</h1>
            <div className={styles.storeLabel}>propA: {store.config.time}</div>
        </header>
    );
}