// app/page.tsx
import { getStore } from './store/store';
import HomePageConfigForm from './components/HomePageConfigForm';
import styles from './page.module.scss';

export default async function HomePage() {
  const store = await getStore();
  return (
    <div>
      <div>HomePage</div>
      <p>root overview page</p>
      <div className={styles.propB}>Current propB: {store.config.settings.propB}</div>
      <div className={styles.propB}>Current check: {store.config.settings.check ? 'true' : 'false'}</div>
      <HomePageConfigForm currentSettings={store.config.settings} />
    </div>
  );
}