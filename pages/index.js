
import styles from '../styles/Home.module.css'
import Datum from '../components/1.General/Datum/Datum'
import Addplayer from '../components/Addplayer/Addplayer'

export default function Home() {
  return (
    <div className={styles.container}>
        <Datum />
        <title>GrassRoot Inc.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/football.ico" />

      <main className={styles.main}>
        <h1 className={styles.title}>to GrassRoot Inc.</h1>
      </main>
      <Addplayer />
    </div>
  )
}
