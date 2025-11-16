// https://mui.com/material-ui/integrations/nextjs/#font-optimization
// https://mui.com/material-ui/react-css-baseline/
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Roboto } from 'next/font/google';
import './globals.css';
import theme from './theme';
import styles from './layout.module.scss';
import type { ReactNode } from 'react';
import AppHeader from './components/root/AppHeader';
import AppFooter from './components/root/AppFooter';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={styles.rootLayout}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppHeader />
            <div className={styles.content}>{children}</div>
            <AppFooter />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}