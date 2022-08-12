import React from 'react';
import { useRouter } from 'next/router';
import { MainLayout } from '../../src/components/layouts';

import styles from '../../styles/Users.module.css';

const UserPage = () => {
  const router = useRouter();

  const userId = router.query.id;

  return (
    <MainLayout
      title={'User'}
      description="User Page description"
      content={'User Page'}
    >
      <div className={styles.containerUsers}>
        <h1>Hello from User with id: {userId}</h1>
      </div>
    </MainLayout>
  );
};

export default UserPage;
