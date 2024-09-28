import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Just Got Your Mystrix?
        </Heading>
        <p className="hero__subtitle">Get Ready to Dive In!</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Mystrix/GettingStarted">
            Getting Started with Mystrix
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Project Matrix Wiki`}
      description="Wiki and Documentations of everything 203 Systems">
      <HomepageHeader />
      <main>
        
      </main>
    </Layout>
  );
}
