import React from 'react'
import Image from 'next/future/image'
import classes from './HeaderImg.module.css'
import headerImg from '../../../public/images/header/header.jpg'
import HomeBtn from '../HomeBtn/HomeBtn'

function HeaderImg() {
  return (
    <>
      <HomeBtn />
      <Image className={classes.heroImg} src={headerImg} alt="photo of leksand logo" width="50px" height="50px" />
    </>
  )
}
export default HeaderImg
