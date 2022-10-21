/** @format */
import React from 'react'
import ToggleBetween from '../../components/1.General/ToggleBetween/ToggleBetween'
import Datum from '../../components/1.General/Datum/Datum'
import Image from 'next/future/image'
import leksandH from '../.././Images/leksandhockeyheader.png'
import Poängliga from '../../components/Poangliga/Poangliga'

export default function PoangligaSida(props) {
  return (
    <>
      <Image src={leksandH} alt="photo of leksand logo" width="50px" height="50px" />
      <Datum />
      <ToggleBetween />
      <Poängliga />
    </>
  )
}
