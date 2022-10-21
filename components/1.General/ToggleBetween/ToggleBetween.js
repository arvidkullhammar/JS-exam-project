import React from 'react'
import classes from './ToggleBetween.module.css'
import Link from 'next/link'

function ToggleBetween() {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Link href="/orncupen">
          <div className={classes.leftRadius}>Spelschema</div>
        </Link>
        <Link href="/orncupen/tabell">
          <div className={classes.squared}>Tabell</div>
        </Link>
        <Link href="/orncupen/poangliga">
          <div className={classes.rightRadius}>Poängliga</div>
        </Link>
      </div>
    </div>
  )
}
export default ToggleBetween
