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
      <div style={{ position: 'relative', height: '0vh' }}>
            {/* Background using ::before pseudo-element */}
          <div style={{
              position: 'absolute',
              top: '5vh',
              left: '5vh',
              width: '90vh',
              height: '90vh',
              zIndex: -1, // Ensure background is behind content
              backgroundColor: '#ff99df',
              backgroundImage: `
                  radial-gradient(circle at 52% 73%, hsla(310, 85%, 67%, 1) 0px, transparent 50%),
                  radial-gradient(circle at 0% 30%, hsla(197, 90%, 76%, 1) 0px, transparent 50%),
                  radial-gradient(circle at 41% 26%, hsla(234, 79%, 69%, 1) 0px, transparent 50%),
                  radial-gradient(circle at 41% 51%, hsla(41, 70%, 63%, 1) 0px, transparent 50%),
                  radial-gradient(circle at 41% 88%, hsla(36, 83%, 61%, 1) 0px, transparent 50%),
                  radial-gradient(circle at 76% 73%, hsla(346, 69%, 70%, 1) 0px, transparent 50%),
                  radial-gradient(circle at 29% 37%, hsla(272, 96%, 64%, 1) 0px, transparent 50%)`,
              backgroundSize: '150% 150%',
              filter: 'blur(80px)',
              animation: 'moveBackground 10s linear infinite',
          }}></div>

      </div>
      <div className={styles.main_container}>
        <Heading as="h1" className={styles.hero_title}>
          Project Matrix Wiki
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
