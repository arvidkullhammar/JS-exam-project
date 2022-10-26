/** @format */

import React from 'react';
import Image from 'next/future/image';
import aik from 'public/images/mocklogos/klubb_aik.png';
import kik from 'public/images/mocklogos/kik_logga.png';
import almtuna from 'public/images/mocklogos/klubb_almtuna.png';
import bik from 'public/images/mocklogos/klubb_bik.png';
import loven from 'public/images/mocklogos/klubb_loven.png';
import modo from 'public/images/mocklogos/mini_modo.png';
import { prominent } from 'color.js';

prominent(aik, { amount: 2 }).then((color) => {
  console.log(color); // [241, 221, 63]
});

export default function Klubbloggor() {
  const randomLogo = () => {
    const logos = [aik, kik, almtuna, bik, loven, modo];
    const random = Math.floor(Math.random() * logos.length);
    return logos[random];
  };

  return <Image src={randomLogo()} alt="klubblogo" width={200} height={200} />;
}
