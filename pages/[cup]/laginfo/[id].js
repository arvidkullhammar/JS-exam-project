import KontaktInfo from "../../../components/LagInfoComponents/KontaktInfo";
import React, { useState, useEffect } from "react";
import classes from "../../../styles/LagInfo.module.css";

export default function LagInfo(props) {
  return (
    <main className={classes.lagInfoContainer}>
      <header className={classes.headerLogo}></header>
      <div className={classes.kontaktInfo}>{props.id}</div>
      <div className={classes.spelarTrupp}>Spelartrupp</div>
      <div className={classes.omkladningsRum}>Omklädningsrum</div>
      <div className={classes.hittaHit}>Hitta hit</div>
      <div className={classes.viktigInfo}>viktig info</div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const [fetched, setFetched] = useState("");

  fetch("http://localhost:3000/api/teams")
    .then((rawData) => rawData.json())
    .then((data) => setFetched(data[0]))
    .catch((error) => console.log(error));

  return {
    props: { id: teamName, email, name, abr, admin },
  };
}
