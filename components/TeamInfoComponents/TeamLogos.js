/** @format */

import React from "react";
import Image from "next/future/image";
import aik from "../../Images/mocklogos/klubb_aik.png";
import kik from "../../Images/mocklogos/kik_logga.png";
import almtuna from "../../Images/mocklogos/klubb_almtuna.png";
import bik from "../../Images/mocklogos/klubb_bik.png";
import loven from "../../Images/mocklogos/klubb_loven.png";
import modo from "../../Images/mocklogos/mini_modo.png";

export default function Klubbloggor() {
  const randomLogo = () => {
    const logos = [aik, kik, almtuna, bik, loven, modo];
    const random = Math.floor(Math.random() * logos.length);
    return logos[random];
  };

  return <Image src={randomLogo()} alt="klubblogo" width={200} height={200} />;
}
