import React from 'react'
import classes from './Poängliga.module.css'

function Poängliga() {
  return (
    <div>
      <table className={classes.tabellStyling}>
        <thead>
          <tr>
            <th className={classes.textLeft}>Lag</th>
            <th>Spelare</th>
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
export default Poängliga
