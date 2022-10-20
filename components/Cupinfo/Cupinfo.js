/** @format */

import React from 'react';
import classes from '../Cupinfo/CupInfo.module.css';

function Cupinfo() {
  return (
    <main className={classes.cupInfoContainer}>
      <div className={classes.cupHeader}>Cup´header</div>
      <div className={classes.allmant}>allmänt</div>
      <div className={classes.oppeTider}>Öppetider</div>
      <div className={classes.ovrigInfo}>övrig info</div>
      <div className={classes.hittaHit}>Hitta hit</div>
      <div className={classes.viktigInfo}>viktig info</div>
    </main>
  );
}
export default Cupinfo;
