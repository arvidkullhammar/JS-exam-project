import React from 'react'
import classes from './GameInfoBtn.module.css'
import Link from 'next/link'

function GameInfoBtn() {
  return (
    <div className={classes.circle}>
      <Link
        href={{
          pathname: `/{cupnamn}/GameInfo/{abbv-abbv}`,
        }}
        className={classes.textWrap}
      >
        <span>i</span>
      </Link>
    </div>
  )
}
export default GameInfoBtn
