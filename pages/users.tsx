import type { NextPage, GetStaticProps } from 'next';
import { useQuery } from '@tanstack/react-query';

import { USERS_KEY } from '../src/constants';
import { MainLayout } from '../src/components/layouts';

import styles from '../styles/Users.module.css';
import { usersApi } from '../src/api';
import { UserResponse } from '../src/interfaces';

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
    <>
      <MainLayout
        title={'Users'}
        description="Users Page description"
        content={'Users Page'}
      >
        <div className={styles.containerUsers}>
          <ul className={styles.listUsers}>
            {users?.map((user) => (
              <div key={user.id}>
                {/* <Link href={`/users/${user.id}`}> */}
                {user.id}-{user.name}
                {/* </Link> */}
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
    </>
  );
};

const fetchUsers = async () => {
  const { data } = await usersApi.get<UserResponse[]>('/superheroes');

  return data;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const users = await fetchUsers();
  console.log('[DEBUG] users', users);

  return { props: { users } };
};

export default UsersPage;
