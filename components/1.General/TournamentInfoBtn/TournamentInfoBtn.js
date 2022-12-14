import React from 'react'
import classes from './TournamentInfoBtn.module.css'
import Link from 'next/link'

function TournamentInfoBtn() {
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
export default TournamentInfoBtn
