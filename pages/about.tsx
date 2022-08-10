import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

import React from 'react';

// export default function AboutPage: NextPage() {
//   return (
//     <div>about</div>
//   )
// }

const AboutPage: NextPage = () => {
  return (
    <>
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
