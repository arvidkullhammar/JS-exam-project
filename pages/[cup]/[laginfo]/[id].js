/** @format */
import Image from "next/future/image";
import React, { useEffect } from "react";
import classes from "./Laginfo.module.css";
import Klubbloggor from "../../../components/LagInfoComponents/Klubbloggor";
import jersey from "../../../Images/lagtröja.png";
import Addplayer from "../../../components/Addplayer/Addplayer";
import { useState } from "react";
import Router from "next/router";

export default function LagInfo(props) {
  //Updatera player roster när ny spelare läggs till
  const [playerState, setPlayerState] = useState(0);
  useEffect(() => {
    console.log("updated player roster");
  }, [playerState]);
  const addCallback = () => {
    setPlayerState(playerState + 1);
  };

  //Loading screen
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [Router.events]);
  if (loading) {
    console.log("loading");
    return <div>Loading</div>;
  }

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
        <h2 className={classes.spelarTruppText}>Spelartrupp</h2>
        <div>
          {props.players.map((player) => (
            <div key={player.id}>
              <p>{player.name}</p>
              <div className={classes.jerseyContainer}>
                <Image src={jersey} alt="Picture of a jersey" width="50px" height="50px" className={classes.jersey} />
                <p className={classes.jerseyNumber}>{player.number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Addplayer team={props.id} parentStateCallback={addCallback} />
      <div className={classes.omkladningsRum}>Omklädningsrum</div>
      <div className={classes.hittaHit}>Hitta hit</div>
      <div className={classes.viktigInfo}>
        Viktig information
        <p>rea på kaffe. 5 kr st!</p>
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
