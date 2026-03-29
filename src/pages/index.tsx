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
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started">
                Start here
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                About Woodward Studio
              </Link>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.heroFrame}>
              <p className={styles.heroFrameText}>Reserved for future animation / demo loop</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Agentic ops engineering, AI solutions architecture, and modern full-stack systems.">
      <HomepageHeader />
    </Layout>
  )
}
