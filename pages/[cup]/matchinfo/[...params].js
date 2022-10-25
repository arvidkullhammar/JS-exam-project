import React from 'react'
import GameInfo from '../../../components/GameInfo/GameInfo'
import { useRouter } from 'next/router'

export default function gameInfoPages(props) {
  const teamOneId = props.params.params[0]
  const teamTwoId = props.params.params[1]
  return (
    <div>
      <GameInfo teamOne={teamOneId} teamTwo={teamTwoId} />{' '}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      params,
    },
  }
}
