import React from "react";
import classes from "./Datum.module.css";
import moment from "moment";
import { DateTime } from "luxon";

function Datum() {
  // write a functions that shows the coming 4 days from today and resets to index 0 after the end of the array

  let day = DateTime.now().toFormat("cccc dd/MM ");
  let tomorrow = DateTime.now().plus({ days: 1 }).toFormat("cccc dd/MM ");
  let dayAftertomorrow = DateTime.now().plus({ days: 2 }).toFormat("cccc dd/MM ");
  let dayAfterDayAftertomorrow = DateTime.now().plus({ days: 3 }).toFormat("cccc dd/MM ");

  return (
    <div className={classes.circleContainer}>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>All</span>
        </div>
      </div>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>{day}</span>
          <span></span>
        </div>
      </div>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>{tomorrow}</span>
          <span></span>
        </div>
      </div>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>{dayAftertomorrow}</span>
          <span></span>
        </div>
      </div>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>{dayAfterDayAftertomorrow}</span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
export default Datum;
