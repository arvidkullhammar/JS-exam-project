/** @format */

import KontaktInfo from '../../../components/LagInfoComponents/KontaktInfo';
import React, { useState, useEffect } from 'react';
import classes from '../../../styles/LagInfo.module.css';

export default function LagInfo(props) {
  return (
    <main className={classes.lagInfoContainer}>
      <header className={classes.headerLogo}>
        <h1>{props.name}</h1>
      </header>
      <div className={classes.kontaktInfo}>
        <h2>Kontaktinfo</h2>
        <h2>{props.admin}</h2>
        <h2>{props.email}</h2>
      </div>
      <div className={classes.spelarTrupp}>Spelartrupp</div>
      <div className={classes.omkladningsRum}>Omklädningsrum</div>
      <div className={classes.hittaHit}>Hitta hit</div>
      <div className={classes.viktigInfo}>viktig info</div>
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const raw = await fetch(`http://localhost:3000/api/teams/${params.id}`);
  const res = await raw.json();

  return {
    props: { id: 'id', email: res.email, name: res.name, abr: 'abr', admin: res.admin },
  };
}
