/** @format */

import React from 'react';
import classes from './Matchkort.module.css';
import MatchinfoKnapp from '../../components/1.General/MatchinfoKnapp/MatchinfoKnapp';

function Matchkort() {
  return (
    <div className={classes.container}>
      <div className={classes.div1}>Mån 13 nov, 10:00</div>
      <div className={classes.div2}>
        <span className={classes.textWrap}>i</span>
      </div>
      <div className={classes.div3}>Domsjö IF - Modo FF</div>
      <div className={classes.div4}>P15</div>
      <div className={classes.div5}>Matchen pågår</div>
      <div className={classes.div6}>Kempevallen</div>
      <div className={classes.div7}>13- 37</div>
    </div>
  );
}
export default Matchkort;

{
  /* <div className={classes.container}>
<div>Mån 13 nov, 10:00</div>
<div>Infoknapp</div>
<div>Domsjö IF - Modo FF</div>
<div>P15</div>
<div>Kempevallen</div>
<div className={classes.matchInfo}>Matchen pågår</div>
<div className={classes.resultat}>13- 37</div>
</div> */
}
