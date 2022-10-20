import React from "react";
import classes from "./Datum.module.css";

function Datum() {
  return (
    <div className={classes.circleContainer}>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>All</span>
        </div>
      </div>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>Dag</span>
          <span>Datum</span>
        </div>
      </div>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>Dag</span>
          <span>Datum</span>
        </div>
      </div>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>Dag</span>
          <span>Datum</span>
        </div>
      </div>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>Dag</span>
          <span>Datum</span>
        </div>
      </div>
    </div>
  );
}
export default Datum;
