import React, { useState } from 'react'
import classes from './Table.module.css'
import Tooltip from '@mui/material/Tooltip'

function Tabell(props) {
  return (
    <div className={classes.container}>
      <table className={classes.tabellStyling}>
        <thead>
          <tr>
            <th className={`${classes.textLeft} ${classes.roundedCornerLeft}`}>Lag</th>
            <Tooltip Tooltip title="Spelade matcher">
              <th>M</th>
            </Tooltip>
            <Tooltip Tooltip title="Vinster">
              <th>V</th>
            </Tooltip>
            <Tooltip Tooltip title="Oavgjort">
              <th>O</th>
            </Tooltip>
            <Tooltip Tooltip title="Förluster">
              <th>F</th>
            </Tooltip>
            <Tooltip Tooltip title="Gjorda mål">
              <th>GM</th>
            </Tooltip>
            <Tooltip Tooltip title="Insläppta mål">
              <th>IL</th>
            </Tooltip>
            <Tooltip Tooltip title="Målskillnad">
              <th>MS</th>
            </Tooltip>
            <Tooltip Tooltip title="Poäng">
              <th className={classes.roundedCornerRight}>P</th>
            </Tooltip>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.textLeft}>{props.teams[0].name}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>{props.teams[1].name}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>{props.teams[2].name}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>{props.teams[3].name}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>{props.teams[4].name}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={classes.textLeft}>{props.teams[5].name}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Tabell
