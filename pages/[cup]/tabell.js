/** @format */
import React from 'react'
import ToggleBetween from '../../components/1.General/ToggleBetween/ToggleBetween'
import Date from '../../components/1.General/Date/Date'
import Image from 'next/future/image'
import leksandH from '../.././Images/leksandhockeyheader.png'
import Table from '../../components/Table/Table'
import classes from '../../styles/GameSchedule.module.css'
import headerImg from '../.././Images/header/audience-gffb00a2c7_1920.jpg'

export default function tablePage(props) {
  const teams = props.teamId
  return (
    <>
      <Image className={classes.heroImg} src={headerImg} alt="photo of leksand logo" width="50px" height="50px" />
      <Date />
      <ToggleBetween />
      <Table teams={teams} />
    </>
  )
}
export async function getServerSideProps(context) {
  const response = await fetch(`http://localhost:3000/api/teams/`)
  const data = await response.json()

  return {
    props: {
      teamId: data,
    },
  }
}
