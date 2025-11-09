import './globals.css';
import type { ReactNode } from 'react';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import ContentWrapper from './components/ContentWrapper';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mainLayout">
          <div className="layoutContainer">
            <LeftPanel />
            <ContentWrapper>{children}</ContentWrapper>
            <RightPanel />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}