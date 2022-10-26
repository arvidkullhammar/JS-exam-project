import React from 'react'
import classes from './HomeBtn.module.css'
import Link from 'next/link'

const HomeBtn = () => {
  return (
    <div className={classes.btnStyling}>
      <Link
        href={{
          pathname: `/{cupnamn}/`,
        }}
        className={classes.textWrap}
      >
        <span>Tillbaka</span>
      </Link>
    </div>
  )
}
export default HomeBtn
