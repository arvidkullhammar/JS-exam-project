/** @format */
import React from 'react'
import ToggleBetween from '../../components/1.General/ToggleBetween/ToggleBetween'
import Date from '../../components/1.General/Date/Date'
import Image from 'next/future/image'
import leksandH from '../.././Images/leksandhockeyheader.png'
import ScoringLeader from '../../components/ScoringLeader/ScoringLeader'
import classes from '../../styles/GameSchedule.module.css'
import headerImg from '../.././Images/header/audience-gffb00a2c7_1920.jpg'

export default function scoringLeaderPage(props) {
  return (
    <>
      <Image className={classes.heroImg} src={headerImg} alt="photo of leksand logo" width="50px" height="50px" />
      <Date />
      <ToggleBetween />
      <ScoringLeader />
    </>
  )
}
