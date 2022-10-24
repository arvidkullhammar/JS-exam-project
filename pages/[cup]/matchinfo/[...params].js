import React from "react";
import Matchinfo from "../../../components/Matchinfo/Matchinfo";
import { useRouter } from 'next/router'

export default function matchInfoPages(props) {
  const teamOneId = props.params.params[0]
  const teamTwoId = props.params.params[1]
  return( <div><Matchinfo teamOne={teamOneId} teamTwo={teamTwoId} /> </div>)
}


export async function getServerSideProps({params}) {
return {props: {
  params
}}
}