/** @format */
import Image from "next/future/image";
import React, { useEffect } from "react";
import classes from "./TeamInfo.module.css";
import TeamLogos from "../../../components/TeamInfoComponents/TeamLogos";
import jersey from "../../../Images/lagtröja.png";
import Addplayer from "../../../components/Addplayer/Addplayer";
import { useState } from "react";
import Router from "next/router";

export default function TeamInfo(props) {
  //Updatera player roster när ny spelare läggs till
  const [playerState, setPlayerState] = useState(0);
  useEffect(() => {
    console.log("updated player roster");
  }, [playerState]);
  const addCallback = () => {
    setPlayerState(playerState + 1);
  };

  return (
    <main className={classes.lagInfoContainer}>
      <header className={classes.headerLogo}>
        <TeamLogos />
        <h1>{props.teamName}</h1>
      </header>
      <div className={classes.kontaktInfo}>
        <h2>Kontaktinfo</h2>
        <p>{props.admin}</p>
        <p>{props.email}</p>
      </div>
      <div className={classes.spelarTrupp}>
        <h2 className={classes.spelarTruppText}>Spelartrupp</h2>
        <div>
          {props.players.map((player) => (
            <div className={classes.spelarDiv} key={player.id}>
              <p className={classes.spelare}>{player.name}</p>
              <div className={classes.jerseyContainer}>
                <Image src={jersey} alt="Picture of a jersey" width="50px" height="50px" className={classes.jersey} />
                <p className={classes.jerseyNumber}>
                  <b>{player.number}</b>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.omkladningsRum}>
        <h2>Spelarverktyg</h2>
        <Addplayer team={props.id} parentStateCallback={addCallback} />
      </div>
      <div className={classes.hittaHit}>
        <h2>Hitta hit</h2>
        <p>Santa Barbara Street 34</p>
        <p>Saint Row aveny 4</p>
      </div>
      <div className={classes.viktigInfo}>
        <h2>Viktig information</h2>
        <p>
          Mindre brand i omklädningsrum 1. <br /> Inget är under kontroll.
        </p>
      </div>
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
