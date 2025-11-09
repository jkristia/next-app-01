// app/page.tsx
import { getStore } from './store/store';
import PropBEditor from './components/PropBEditor';
import styles from './page.module.scss';

export default async function HomePage() {
  const store = await getStore();
  return (
    <div>
      <div>HomePage</div>
      <p>root overview page</p>
      <div className={styles.propB}>Current propB: {store.config.propB}</div>
      <PropBEditor initial={store.config.propB} />
    </div>
  );
}