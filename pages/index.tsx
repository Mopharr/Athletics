import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Loading from '../components/loading'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Athletics</title>
        <meta name="description" content="Manage Your Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Loading />

        
        
      </main>

  
    </div>
  )
}
