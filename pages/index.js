/** @format */

import styles from "../styles/Home.module.css";
import CupInfoKnapp from "../components/1.General/CupInfoknapp/CupInfoKnapp";
import Tabell from "../components/Tabell/Tabell";
import Poängliga from "../components/Poängliga/Poängliga";
import Matchinfo from "../components/Matchinfo/Matchinfo";
import Addplayer from "../components/Addplayer/Addplayer";
import ToggleBetween from "../components/1.General/ToggleBetween/ToggleBetween";
import Matchkort from "../components/Matchkort/Matchkort";
import BackButton from "../components/1.General/BackButton/BackButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <title>GrassRoot Inc.</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/football.ico" />
      <BackButton />
      <CupInfoKnapp />
      <Tabell />
      <Poängliga />
      <Matchinfo />
      <ToggleBetween />
      <Matchkort />

      <main className={styles.main}>
        <h1 className={styles.title}>to GrassRoot Inc.</h1>
      </main>
      <Addplayer />
    </div>
  );
}
