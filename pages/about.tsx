import type { NextPage } from 'next';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css';

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>About</h1>

          <p className={styles.description}>Quienes somos?</p>
        </main>
        {/* 
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      </div>
    </>
  );
};

export default About;
