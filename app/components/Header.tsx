import styles from './Header.module.scss';
import clsx from 'clsx';

export default function Header() {
    return (
        <header className={clsx(styles.header, styles.secondary)}>
            <h1>My App Header</h1>
        </header>
    );
}