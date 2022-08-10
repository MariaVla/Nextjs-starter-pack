import Link from 'next/link';
import { useRouter } from 'next/router';

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export const ActiveLink = ({ text, href }) => {
  const router = useRouter();

  const active = router.asPath === href;

  return (
    <Link href={href}>
      <a style={active ? style : null}>
        <span>{text}</span>
      </a>
    </Link>
  );
};
