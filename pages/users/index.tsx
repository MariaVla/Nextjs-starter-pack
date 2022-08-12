import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import { USERS_KEY } from '../../src/constants';
import { MainLayout } from '../../src/components/layouts';
import { usersApi } from '../../src/api';
import { UserResponse } from '../../src/interfaces';

import styles from '../../styles/Users.module.css';

type Props = {
  users: UserResponse[];
};

// Example using React-Query
const UsersPage: NextPage<Props> = (props) => {
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
    initialData: props?.users,
    staleTime: 30000,
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

const fetchUsers = async () => {
  const { data } = await usersApi.get<UserResponse[]>('/superheroes');

  return data;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const users = await fetchUsers();

  return { props: { users } };
};

export default UsersPage;
