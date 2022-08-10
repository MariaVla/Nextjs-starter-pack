import React from 'react';
import type { NextPage } from 'next';
import { MainLayout } from '../components/layouts/MainLayout';

import styles from '../styles/Home.module.css';

// export default function AboutPage: NextPage() {
//   return (
//     <div>about</div>
//   )
// }

const AboutPage: NextPage = () => {
  return (
    <>
      <MainLayout
        title={'About'}
        description="About Page description"
        content={'About Page'}
      >
        <h1 className={styles.title}>About</h1>

        <p className={styles.description}>Quienes somos?</p>
      </MainLayout>
    </>
  );
};

export default AboutPage;
