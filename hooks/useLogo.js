/** @format */

import * as React from 'react';
import { prominent } from 'color.js';
import aik from 'public/images/mocklogos/klubb_aik.png';
import kik from 'public/images/mocklogos/kik_logga.png';
import almtuna from 'public/images/mocklogos/klubb_almtuna.png';
import bik from 'public/images/mocklogos/klubb_bik.png';
import loven from 'public/images/mocklogos/klubb_loven.png';
import modo from 'public/images/mocklogos/mini_modo.png';

export default function useLogo() {
  const [rndLogo, setRndLogo] = React.useState();
  const [colors, setColors] = React.useState([[], []]);

  React.useEffect(() => {
    const logos = [aik, kik, almtuna, bik, loven, modo];
    const random = Math.floor(Math.random() * logos.length);

    prominent(logos[random], { amount: 2 }).then((colorList) => {
      setRndLogo(logos[random]);
      setColors(colorList);
    });
  }, []);

  return {
    logo: rndLogo,
    colors: {
      primary: colors[0].join(','),
      secondary: colors[1].join(','),
    },
  };
}
