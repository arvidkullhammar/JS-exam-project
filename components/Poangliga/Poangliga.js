import React from 'react'
import classes from './Poangliga.module.css'

function Poangliga() {
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
            <td className={classes.textLeft}>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Poangliga
