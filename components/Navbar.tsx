import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav style={{ padding: '2rem' }}>
      <Link href="/">
        <a>
          <span>Home</span>
        </a>
      </Link>

      <Link href="/login">
        <a>
          <span>Login</span>
        </a>
      </Link>

      <Link href="/about">
        <a>
          <span>About</span>
        </a>
      </Link>
      <Link href="/users">
        <a>
          <span>Users</span>
        </a>
      </Link>
      <Link href="/friends">
        <a>
          <span>Friends</span>
        </a>
      </Link>
    </nav>
  );
};
