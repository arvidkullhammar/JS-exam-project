import React from "react";
import GameInfo from "../../../components/GameInfo/GameInfo";
import { useRouter } from "next/router";

export default function gameInfoPages(props) {
  const teamOneId = props.params.params[0];
  const teamTwoId = props.params.params[1];
  console.log(props);
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
