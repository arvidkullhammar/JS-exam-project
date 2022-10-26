/** @format */
import React from 'react'
import ToggleBetween from '../../components/1.General/ToggleBetween/ToggleBetween'
import Date from '../../components/1.General/Date/Date'
import Table from '../../components/Table/Table'
import HeaderImg from '../../components/1.General/HeaderImg/HeaderImg'

export default function tablePage(props) {
  const teams = props.teamId
  return (
    <>
      <HeaderImg />
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
