import React from 'react'
import classes from './ToggleBetween.module.css'

function ToggleBetween() {
  return (
    <div>
      <div>
        <button className={classes.leftRadius}>Spelschema</button>
        <button className={classes.squared}>Tabell</button>
        <button className={classes.rightRadius}>Poängliga</button>
      </div>
    </div>
  )
}
export default ToggleBetween
