import { useState } from 'react';
import type { NextPage, NextPageContext } from 'next';
import { MainLayout } from '../components/layouts/MainLayout';
import styles from '../styles/Users.module.css';

const fetchFriends = async () => {
  const response = await fetch('http://localhost:4000/friends');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

type Props = {
  usersList: [];
};

type User = {
  id: number;
  website: string;
  name: string;
};

// Example normal data fetching in React
const FriendsPage: NextPage = ({ usersList }: Props) => {
  const [users, setUsers] = useState(usersList);

  if (users?.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainLayout
        title={'Friends'}
        description="Friends Page description"
        content={'Friends Page'}
      >
        <div className={styles.containerUsers}>
          <h1>Friends list (normal fetching in Next.js)</h1>
          <ul className={styles.listUsers}>
            {users?.map((user: User) => (
              <li key={user?.id}>
                <a href={user?.website} target="_blank" rel="noreferrer">
                  {user?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </MainLayout>
    </>
  );
};

export async function getServerSideProps({ query, req }: NextPageContext) {
  if (!req) {
    return { props: { usersList: [] } };
  }

  const usersList = await fetchFriends();

  return { props: { usersList } };
}

export default FriendsPage;
