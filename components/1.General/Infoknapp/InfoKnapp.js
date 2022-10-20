import React from 'react'
import classes from './Infoknapp.module.css'
import Link from 'next/link'

function InfoKnapp() {
  return (
    <div className={classes.circle}>
      <Link
        href={{
          pathname: `/{cupnamn}/info`,
        }}
        className={classes.textWrap}
      >
        <span>i</span>
      </Link>
    </div>
  )
}
export default InfoKnapp
