import type { NextPage } from 'next';
import { MainLayout } from '../components/layouts/MainLayout';
import styles from '../styles/Home.module.css';

const HomePage: NextPage = () => {
  return (
    <MainLayout
      title={'Home'}
      description="Home Page description"
      content={'Home Page'}
    >
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.description}>Get started!</p>
    </MainLayout>
  );
};

export default HomePage;
