/** @format */

import React from 'react';
import GameInfo from '../../../components/GameInfo/GameInfo';

export default function gameInfoPages(props) {
  const teamOneId = props.teamId[0];
  const teamTwoId = props.teamId[1];

  return <div>{<GameInfo teamOne={teamOneId} teamTwo={teamTwoId} />}</div>;
}

export async function getServerSideProps(context) {
  const response = await fetch(`http://localhost:3000/api/teams/`);
  const data = await response.json();

  return {
    props: {
      teamId: data,
    },
  };
}
