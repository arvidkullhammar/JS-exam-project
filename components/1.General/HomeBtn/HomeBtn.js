import React from 'react'
import classes from './HomeBtn.module.css'
import Link from 'next/link'

const HomeBtn = () => {
  return (
    <Link
      href={{
        pathname: `/{cupnamn}/`,
      }}
      className={classes.textWrap}
    >
      <div className={classes.btnStyling}>
        <span>Tillbaka</span>
      </div>
    </Link>
  )
}
export default HomeBtn
