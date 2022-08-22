import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { FormattedMessage, useIntl } from 'react-intl';

import { MainLayout } from '../src/components/layouts/MainLayout';

import styles from '../styles/Common.module.css';

const HomePage: NextPage = () => {
  const { locales } = useRouter();

  const intl = useIntl();

  const title = intl.formatMessage({ id: 'page.home.head.title' });
  const description = intl.formatMessage({
    id: 'page.home.head.meta.description',
  });

  return (
    <MainLayout title={title} description={description} content={'Home Page'}>
      <header>
        <div className={styles.languages}>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              {locale}
            </Link>
          ))}
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <FormattedMessage
            id="page.home.title"
            values={{ b: (chunks) => <b>{chunks}</b> }}
          />
        </h1>

        <p className={styles.description}>
          <FormattedMessage id="page.home.description" />
        </p>
      </main>
    </MainLayout>
  );
};

export default HomePage;
