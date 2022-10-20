/** @format */
import Image from 'next/future/image';
import React from 'react';
import classes from '../../../styles/LagInfo.module.css';
import Klubbloggor from '../../../components/LagInfoComponents/Klubbloggor';
import jersey from '../../../Images/lagtröja.png';

export default function LagInfo(props) {
  return (
    <main className={classes.lagInfoContainer}>
      <header className={classes.headerLogo}>
        <Klubbloggor />
        <h1>{props.teamName}</h1>
      </header>
      <div className={classes.kontaktInfo}>
        <h2>Kontaktinfo</h2>
        <p>{props.admin}</p>
        <p>{props.email}</p>
      </div>
      <div className={classes.spelarTrupp}>
        <h2>Spelartrupp</h2>
        {props.players.map((player) => (
          <div key={player.id}>
            <p>{player.name}</p>
            <div className={classes.jerseyContainer}>
              <Image
                src={jersey}
                alt="Picture of a jersey"
                width="50px"
                height="50px"
                className={classes.jersey}
              />
              <p className={classes.jerseyNumber}>{player.number}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.omkladningsRum}>Omklädningsrum</div>
      <div className={classes.hittaHit}>Hitta hit</div>
      <div className={classes.viktigInfo}>
        <h4>Viktig information</h4>
        <p>rea på kaffe. 5 kr st!</p>
      </div>
      f
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
