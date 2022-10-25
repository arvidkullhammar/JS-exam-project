import React from 'react'
import classes from './CupInfoBtn.module.css'
import Link from 'next/link'

function CupInfoBtn() {
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
export default CupInfoBtn
