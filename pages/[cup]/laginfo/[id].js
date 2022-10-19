import KontaktInfo from "../../../components/LagInfoComponents/KontaktInfo";
import React, { useState, useEffect } from "react";
import classes from "../../../styles/LagInfo.module.css";

export default function LagInfo(props) {
  return (
    <main className={classes.lagInfoContainer}>
      <header className={classes.headerLogo}></header>
      <div className={classes.kontaktInfo}></div>
      <div className={classes.spelarTrupp}></div>
      <div className={classes.omkladningsRum}></div>
      <div className={classes.hittaHit}></div>
      <div className={classes.viktigInfo}></div>
    </main>
  );
}

// export async function getServerSideProps(context) {
//   const [teamName, setTeamName] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:3000/api/teams")
//       .then((rawData) => rawData.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return <div>{teamName}</div>;
// }
