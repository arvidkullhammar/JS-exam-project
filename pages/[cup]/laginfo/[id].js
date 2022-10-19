/** @format */

import KontaktInfo from '../../../components/LagInfoComponents/KontaktInfo';
import React from 'react';
import classes from '../../../styles/LagInfo.module.css';
import Klubbloggor from '../../../components/LagInfoComponents/Klubbloggor';

export default function LagInfo(props) {
  return (
    <main className={classes.lagInfoContainer}>
      <header className={classes.headerLogo}>
        <Klubbloggor />
        <h1>{props.teamName}</h1>
      </header>
      <div className={classes.kontaktInfo}>
        <h2>Kontaktinfo</h2>
        <h2>{props.admin}</h2>
        <h2>{props.email}</h2>
      </div>
      <div className={classes.spelarTrupp}>
        <h2>Spelartrupp</h2>
        {props.players.map((player) => (
          <div key={player.id}>
            <h3>{player.name}</h3>
          </div>
        ))}
      </div>
      <div className={classes.omkladningsRum}>Omklädningsrum</div>
      <div className={classes.hittaHit}>Hitta hit</div>
      <div className={classes.viktigInfo}>viktig info</div>
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const [teamRes, playersRes] = await Promise.all([
    fetch(`http://localhost:3000/api/teams/${params.id}`),
    fetch(`http://localhost:3000/api/players/${params.id}`),
  ]);
  const [team, players] = await Promise.all([teamRes.json(), playersRes.json()]);
  console.log(players);
  console.log(team);
  return {
    props: {
      id: team.id,
      email: team.email,
      teamName: team.name,
      abr: team.abr,
      admin: team.admin,
      players,
    },
  };
}
