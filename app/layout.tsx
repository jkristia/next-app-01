
import './globals.css';
import styles from './layout.module.scss';
import type { ReactNode } from 'react';
import AppHeader from './components/root/AppHeader';
import AppFooter from './components/root/AppFooter';

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.rootLayout}>
        <AppHeader />
        <div className={styles.content}>{children}</div>
        <AppFooter />
      </body>
    </html>
  );
}