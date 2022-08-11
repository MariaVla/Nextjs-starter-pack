import type { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import { MainLayout } from '../src/components/layouts/MainLayout';
import styles from '../styles/Users.module.css';

const fetchUsers = async () => {
  const response = await fetch('http://localhost:4000/superheroes');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Example using React-Query
const UsersPage: NextPage = (props) => {
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
  } = useQuery(['users'], fetchUsers, {
    initialData: props?.users,
    staleTime: 30000,
    onSuccess,
    onError,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
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

export async function getServerSideProps() {
  const users = await fetchUsers();
  return { props: { users } };
}

export default UsersPage;
