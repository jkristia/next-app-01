import styles from './RightPanel.module.scss';
import type { Store } from '../store/store';

export default function RightPanel({ store }: { store: Store }) {
    return (
        <aside className={styles.rightPanel}>
            <h3>Right Panel</h3>
            <div className={styles.storeLabel}>propA: {store.config.propA}</div>
            <p>Contextual info or help</p>
        </aside>
    );
}