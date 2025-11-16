import styles from './AppHeader.module.scss';
import clsx from 'clsx';
import { getStore } from '../../store/store';

export default async function AppHeader() {
    const store = await getStore();
    return (
        <header className={clsx(styles.header, styles.secondary)}>
            app header
        </header>
    );
}