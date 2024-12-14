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
      
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Project Matrix Wiki`}
      description="Wiki and Documentations of everything 203 Systems">
      <main>
      <div className={styles.background_container}>
      <div className={styles.background}></div>
  </div>
      <div className={styles.main_container}>
        <Heading as="h1" className={styles.hero_title}>
          Project&nbsp;&#8203;Matrix Wiki
        </Heading>
        <p className={styles.hero_subtitle}>
          Get Started With your Mystrix
        </p>
        <div className={styles.buttons}>
          <Link
            className={"button" + " " + styles.hero_button}
            to="/docs/Mystrix/GettingStarted">
            Quick Start
          </Link>
          <Link
            className={"button" + " " + styles.hero_button}
            to="/docs/Developer/MatrixOSBasics">
            Developer API
          </Link>
        </div>
      </div>
      </main>
    </Layout>
  );
}
