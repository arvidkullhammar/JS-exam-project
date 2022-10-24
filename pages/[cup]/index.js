/** @format */
import React from "react";
import Matchkort from "../../components/Matchkort/Matchkort";
import ToggleBetween from "../../components/1.General/ToggleBetween/ToggleBetween";
import Datum from "../../components/1.General/Datum/Datum";
import Image from "next/future/image";
import headerImg from "../.././Images/header/audience-gffb00a2c7_1920.jpg";
import classes from "./spelschema.module.css";

export default function SpelschemaSida(props) {
  return (
    <>
      <Image className={classes.heroImg} src={headerImg} alt="photo of leksand logo!" width="50px" height="50px" />
      <Datum />
      <ToggleBetween />
      <Matchkort team1={props.teamId[0]} team2={props.teamId[1]} />
      <Matchkort team1={props.teamId[2]} team2={props.teamId[3]} />
      <Matchkort team1={props.teamId[4]} team2={props.teamId[5]} />
      <Matchkort team1={props.teamId[1]} team2={props.teamId[0]} />
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
