import Link from 'next/link';

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link href="/login">
          <a>
            <span>Login</span>
          </a>
        </Link>
      </nav>
    </>
  );
};
