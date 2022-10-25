/** @format */
import React from 'react'
import ToggleBetween from '../../components/1.General/ToggleBetween/ToggleBetween'
import Datum from '../../components/1.General/Date/Date'
import Image from 'next/future/image'
import leksandH from '../.././Images/leksandhockeyheader.png'
import Tabell from '../../components/Table/Table'
import classes from './GameSchedule.module.css'
import headerImg from '../.././Images/header/audience-gffb00a2c7_1920.jpg'

export default function tablePage(props) {
  return (
    <>
      <Image className={classes.heroImg} src={headerImg} alt="photo of leksand logo" width="50px" height="50px" />
      <Datum />
      <ToggleBetween />
      <Tabell />
    </>
  )
}
