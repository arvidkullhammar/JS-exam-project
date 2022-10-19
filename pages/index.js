import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Datum from '../components/1.General/Datum/Datum'
import Infoknapp from '../components/1.General/Infoknapp/Infoknapp'
import Tabell from '../components/Tabell/Tabell'
import Poängliga from '../components/Poängliga/Poängliga'
import Matchinfo from '../components/Matchinfo/Matchinfo'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GrassRoot Inc.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/football.ico" />
      </Head>
      <Infoknapp />
      <Tabell />
      <Poängliga />
      <Matchinfo />

      <main className={styles.main}>
        <h1 className={styles.title}>to GrassRoot Inc.</h1>
      </main>
    </div>
  )
}
