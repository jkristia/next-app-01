import styles from './AppFooter.module.scss';
import { getStore } from '../../store/store';

export default async function Footer() {
    const store = await getStore();
    return (
        <footer className={styles.footer}>
            app footer
        </footer>
    );
}