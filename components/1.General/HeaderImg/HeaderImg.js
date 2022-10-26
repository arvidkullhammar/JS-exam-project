import React from 'react'
import Image from 'next/future/image'
import classes from './HeaderImg.module.css'
import headerImg from '../../../public/images/header/header.jpg'

function HeaderImg() {
  return (
    <>
      <Image className={classes.heroImg} src={headerImg} alt="photo of leksand logo" width="50px" height="50px" />
    </>
  )
}
export default HeaderImg
