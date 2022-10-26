/** @format */

import React from 'react';
import GameInfo from '../../../components/GameInfo/GameInfo';

export default function gameInfoPages(props) {
  const { teamOne, teamTwo } = props;

  return <div>{<GameInfo teamOne={teamOne} teamTwo={teamTwo} />}</div>;
}

export async function getServerSideProps(context) {
  const [team1, team2] = context.params.params;
  const response = await fetch(`http://localhost:3000/api/teams/`);
  const data = await response.json();

  const teamOne = data.find((t) => t.id === Number(team1)) || {};
  const teamTwo = data.find((t) => t.id === Number(team2)) || {};

  return {
    props: {
      data,
      teamOne,
      teamTwo,
    },
  };
}
