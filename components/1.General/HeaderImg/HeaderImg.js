import React from 'react'
import Image from 'next/future/image'
import classes from './HeaderImg.module.css'
import headerImg from '../../../public/images/header/header.jpg'

function HeaderImg() {
  return (
    <>
      <div className={classes.headerContainer}>
        <h1 className={classes.tournamentName}>Örncupen</h1>
        <Image className={classes.heroImg} src={headerImg} alt="photo of leksand logo" width="50px" height="50px" />
      </div>
    </>
  )
}
export default HeaderImg
