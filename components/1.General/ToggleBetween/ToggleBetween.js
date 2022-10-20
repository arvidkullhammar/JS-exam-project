import React from "react";
import classes from "./ToggleBetween.module.css";

function ToggleBetween() {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.leftRadius}>Spelschema</div>
        <div className={classes.squared}>Tabell</div>
        <div className={classes.rightRadius}>Poängliga</div>
      </div>
    </div>
  );
}
export default ToggleBetween;
