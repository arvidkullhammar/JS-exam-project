import React from 'react'
import classes from './Poangliga.module.css'

function Poangliga() {
  return (
    <div className={classes.container}>
      <table className={classes.tabellStyling}>
        <tr>
          <th className={classes.textLeft}>Spelare</th>
          <th>Poäng</th>
        </tr>
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
