import styles from './RightPanel.module.scss';

export default function RightPanel() {
    return (
        <aside className={styles.rightPanel}>
            <h3>Right Panel</h3>
            <p>Contextual info or help</p>
        </aside>
    );
}