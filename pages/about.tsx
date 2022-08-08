import type { NextPage } from 'next';
import { Navbar } from '../src/components/Navbar';
import styles from '../styles/Home.module.css';

const AboutPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>About</h1>

          <p className={styles.description}>Quienes somos?</p>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
