// app/page.tsx
import { ReactNode } from 'react';
import { getStore } from '../store/store';
// import HomePageConfigForm from './components/HomePageConfigForm';
// import styles from './page.module.scss';

export default async function HomePage({ children }: { children: ReactNode }) {
  const store = await getStore();
  return (
    <div>
      main page
      <div>{children}</div>
    </div>
  );
}