import React from "react";
import classes from "./Matchinfo.module.css";

function Matchinfo(props) {
  console.log(props)
  return (
    <div>
      <table className={classes.tabellStyling}>
        <thead>
          <tr>
            <th className={classes.textCenter}></th>
            <th className={classes.textCenter}>Matchstatistik</th>
            <th className={classes.textCenter}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.textLeft}>0</td>
            <td>Mål</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>0</td>
            <td>Gula kort</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>0</td>
            <td>Röda kort</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Matchinfo;
