/** @format */
import React from 'react'
import ToggleBetween from '../../components/1.General/ToggleBetween/ToggleBetween'
import Date from '../../components/1.General/Date/Date'
import ScoringLeader from '../../components/ScoringLeader/ScoringLeader'

import HeaderImg from '../../components/1.General/HeaderImg/HeaderImg'

export default function scoringLeaderPage(props) {
  return (
    <>
      <HeaderImg />
      <Date />
      <ToggleBetween />
      <ScoringLeader />
    </>
  )
}
