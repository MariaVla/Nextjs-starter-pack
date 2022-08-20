import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import { USERS_KEY } from '../src/constants';
import { MainLayout } from '../src/components/layouts';
import { UserResponse } from '../src/interfaces';

import styles from '../styles/Users.module.css';
import { usersApi } from '../src/api';

const fetchUsers = async () => {
  const { data } = await usersApi.get<UserResponse[]>('/superheroes');

  return data;
};

type Props = {
  users: UserResponse[];
};

// Example using React-Query
// Now -> we are calling React query on client side
// TODO -> call React Query on getStaticProps ??? will it work? what if the database change?
const Transactions: NextPage<Props> = () => {
  const onSuccess = (data) => {
    // Perform side effect after data fetching
    console.log('onSuccess:', { data });
  };

  const onError = (error) => {
    // Perform side effect after encountering error
    console.log('onError:', { error });
  };

  const {
    isLoading,
    data: users,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery([USERS_KEY], fetchUsers, {
    // staleTime: 30000,
    onSuccess,
    onError,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error?.message}</h2>;
  }

  return (
    <MainLayout
      title={'Users'}
      description="Users Page description"
      content={'Users Page'}
    >
      <div className={styles.containerUsers}>
        <h1>Client Side Rendering with React Query</h1>
        <ul className={styles.listUsers}>
          {users?.map((user) => (
            <div key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a>
                  {user.id}-{user.name}
                </a>
              </Link>
            </div>
          ))}
        </ul>
        <button
          className={`${styles.btn} ${styles.btnXs} ${styles.fetchBtn}`}
          onClick={refetch}
        >
          Trigger Refetch - React Query
        </button>
      </div>
    </MainLayout>
  );
};

export default Transactions;
