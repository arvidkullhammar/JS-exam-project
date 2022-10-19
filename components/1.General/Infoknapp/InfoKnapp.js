import React from 'react'
import classes from './Infoknapp.module.css'

function Infoknapp() {
  return (
    <div className={classes.infoBtn}>
      <span class="fa fa-info"></span>
      <p>Here is the further context of this card</p>
    </div>
  )
}
export default Infoknapp
