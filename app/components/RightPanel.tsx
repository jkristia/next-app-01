import styles from './RightPanel.module.scss';
import { getStore } from '../store/store';

export default async function RightPanel() {
    const store = await getStore();
    return (
        <aside className={styles.rightPanel}>
            <h3>Right Panel</h3>
            <div className={styles.storeLabel}>propA: {store.config.time}</div>
            <p>Contextual info or help</p>
        </aside>
    );
}