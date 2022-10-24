import React from 'react'
import Link from './customLink'
import classes from './ToggleBetween.module.css'

function ToggleBetween() {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Link href="/orncupen" activeClassName="active">
          <div className={classes.leftRadius}>Spelschema</div>
        </Link>
        <Link href="/orncupen/tabell" activeClassName="active">
          <div className={classes.squared}>Tabell</div>
        </Link>
        <Link href="/orncupen/poangliga" activeClassName="active">
          <div className={classes.rightRadius}>Poängliga</div>
        </Link>
      </div>
    </div>
  )
}
export default ToggleBetween
