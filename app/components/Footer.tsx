import styles from './Footer.module.scss';
import { getStore } from '../store/store';

export default async function Footer() {
    const store = await getStore();
    return (
        <footer className={styles.footer}>
            Footer  2025
            <div className={styles.storeLabel}>propA: {store.config.propA}</div>
        </footer>
    );
}