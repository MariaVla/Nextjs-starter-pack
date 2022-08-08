import { useEffect, useState } from 'react';
import type { NextPage, NextPageContext } from 'next';
import styles from '../styles/Users.module.css';
import { Navbar } from '../src/components/Navbar';

const fetchFriends = async () => {
  const response = await fetch('http://localhost:4000/friends');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Example normal data fetching in React
const FriendsPage: NextPage = ({ usersList }) => {
  const [users, setUsers] = useState(usersList);

  if (!users[0]) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.containerUsers}>
          <h1>Friends list (normal fetching in Next.js)</h1>
          <ul className={styles.listUsers}>
            {users?.map((user) => (
              <li key={user.id}>
                <a href={user.website} target="_blank" rel="noreferrer">
                  {user.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
