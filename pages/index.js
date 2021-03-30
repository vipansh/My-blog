import Head from 'next/head'
import { ArticlePageLayout } from '../components/ArticlePageLayout'
import { BlogOne } from '../components/BlogOne'
import { BlogThree } from '../components/BlogThree'
import { BlogTwo } from '../components/BlogTwo'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>vipansh Blog</title>
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <div className="main-container">

        <div class="content">
          <Link href="/blogs/first-post">
            <h2>What is async/await?</h2>
          </Link>

        </div>
        <div class="content">
          <Link href="/blogs/second-post">

            <h2>3 JavaScript Array Methods Every Developer Should Know</h2>
          </Link>
        </div>
        <div class="content">
          <Link href="/blogs/third-post">

            <h2>Optimize Your React App’s Performance using useMemo</h2>
          </Link>
        </div>

      </div>

    </div>
  )
}
