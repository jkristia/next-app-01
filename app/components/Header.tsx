import styles from './Header.module.scss';
import clsx from 'clsx';
import type { Store } from '../store/store';

export default function Header({ store }: { store: Store }) {
    return (
        <header className={clsx(styles.header, styles.secondary)}>
            <h1>My App Header</h1>
            <div className={styles.storeLabel}>propA: {store.config.propA}</div>
        </header>
    );
}