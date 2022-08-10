import { ActiveLink } from './ActiveLink';

export const Navbar = () => {
  return (
    <nav style={{ padding: '2rem' }}>
      <ActiveLink text={'Home'} href={'/'} />
      <ActiveLink text={'Login'} href={'/login'} />
      <ActiveLink text={'About'} href={'/about'} />
      <ActiveLink text={'Users'} href={'/users'} />
      <ActiveLink text={'Friends'} href={'/friends'} />
    </nav>
  );
};
