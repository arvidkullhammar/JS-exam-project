/** @format */

import React from "react";
import classes from "./Matchkort.module.css";
import MatchinfoKnapp from "../../components/1.General/MatchinfoKnapp/MatchinfoKnapp";

function Matchkort(props) {
  return (
    <div className={classes.container}>
      <div className={classes.div1}>Mån 13 nov, 10:00</div>
      <div className={classes.div2}>
        <span className={classes.textWrap}>i</span>
      </div>
      <div className={classes.div3}>
        <b>
          {props.team1.name} - {props.team2.name}
        </b>
      </div>
      <div className={classes.div4}>
        <b>P15</b>
      </div>
      <div className={classes.div5}>Matchen pågår</div>
      <div className={classes.div6}>Kempevallen</div>
      <div className={classes.div7}>13- 37</div>
    </div>
  );
}
export default Matchkort;
