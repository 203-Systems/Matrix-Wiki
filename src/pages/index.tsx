import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

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
      description="Wiki and Documentations of everything 203 Systems">
      <main>
      <div className={styles.background_container}>
      <div className={styles.background}>
        <img
          className={styles.background_image}
          src={useBaseUrl('/img/gradient.png')}
        />
      </div>
  </div>
      <div className={styles.main_container}>
        <Heading as="h1" className={styles.hero_title}>
          Project&nbsp;&#8203;Matrix Wiki
        </Heading>
        <p className={styles.hero_subtitle}>
          <Translate id="homepage.hero.subtitle">Get Started With your Mystrix</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className={"button" + " " + styles.hero_button}
            to="/docs/Mystrix/GettingStarted">
            <Translate id="homepage.hero.quickStartButton">Quick Start</Translate>
          </Link>
          <Link
            className={"button" + " " + styles.hero_button}
            to="/docs/Developer/MatrixOSBasics">
            <Translate id="homepage.hero.developerAPIButton">Developer API</Translate>
          </Link>
        </div>
      </div>
      </main>
    </Layout>
  );
}
