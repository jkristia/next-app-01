import styles from './Footer.module.scss';
import type { Store } from '../store/store';

export default function Footer({ store }: { store: Store }) {
    return (
        <footer className={styles.footer}>
            Footer © 2025
            <div className={styles.storeLabel}>propA: {store.config.propA}</div>
        </footer>
    );
}