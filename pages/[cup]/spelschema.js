/** @format */
import React from "react";
import Matchkort from "../../components/Matchkort/Matchkort";
import ToggleBetween from "../../components/1.General/ToggleBetween/ToggleBetween";
import Datum from "../../components/1.General/Datum/Datum";
import Image from "next/future/image";
import leksandH from "../.././Images/leksandhockeyheader.png";
import classes from "./spelschema.module.css";

export default function Spelschema(props) {
  return (
    <>
      <Image className={classes.heroImg} src={leksandH} alt="photo of leksand logo" width="50px" height="50px" />
      <Datum />
      <ToggleBetween />
      <Matchkort />
      <Matchkort />
      <Matchkort />
    </>
  );
}