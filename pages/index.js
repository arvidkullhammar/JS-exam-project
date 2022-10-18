import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GrassRoot Inc.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/football.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>to GrassRoot Inc.</h1>
      </main>
    </div>
  )
}
