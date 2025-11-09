
import './globals.css';
import type { ReactNode } from 'react';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import ContentWrapper from './components/ContentWrapper';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import { getStore } from './store/store';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const store = await getStore();
  return (
    <html lang="en">
      <body>
        <Header store={store} />
        <main className="mainLayout">
          <div className="layoutContainer">
            <LeftPanel store={store} />
            <ContentWrapper store={store}>{children}</ContentWrapper>
            <RightPanel store={store} />
          </div>
        </main>
        <Footer store={store} />
      </body>
    </html>
  );
}