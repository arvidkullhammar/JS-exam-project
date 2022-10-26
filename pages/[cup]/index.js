/** @format */
import React from "react";
import GameCard from "../../components/GameCard/GameCard";
import ToggleBetween from "../../components/1.General/ToggleBetween/ToggleBetween";
import Date from "../../components/1.General/Date/Date";
import HeaderImg from "../../components/1.General/HeaderImg/HeaderImg";

export default function GameSchedulePage(props) {
  return (
    <>
      <HeaderImg />
      <Date />
      <ToggleBetween />
      <GameCard team1={props.teamId[0]} team2={props.teamId[1]} />
      <GameCard team1={props.teamId[2]} team2={props.teamId[3]} />
      <GameCard team1={props.teamId[4]} team2={props.teamId[5]} />
      <GameCard team1={props.teamId[1]} team2={props.teamId[0]} />
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`http://localhost:3000/api/teams/`);
  const data = await response.json();

  console.log(data);

  return {
    props: {
      teamId: data,
    },
  };
}
