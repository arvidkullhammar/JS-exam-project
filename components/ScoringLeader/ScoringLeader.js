import React from 'react'
import classes from './ScoringLeader.module.css'

function ScoringLeader() {
  return (
    <div className={classes.container}>
      <table className={classes.tabellStyling}>
        <thead>
          <tr>
            <th className={`${classes.textLeft} ${classes.roundedCornerLeft}`}>Spelare</th>
            <th className={classes.roundedCornerRight}>Poäng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.textLeft}>Krösus Sork</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>Bruce Wayne</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>Jan Emanuel</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>Lex Luthor</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>Elon Musk</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>Dan Bilzerian</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>Tony Stark</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default ScoringLeader
