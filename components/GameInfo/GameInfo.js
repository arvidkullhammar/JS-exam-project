/** @format */

import React from 'react';
import classes from './GameInfo.module.css';
import HeaderImg from 'components/1.General/HeaderImg/HeaderImg';
import Date from 'components/1.General/Date/Date';
import HomeBtn from 'components/1.General/HomeBtn/HomeBtn';
import Link from 'next/link';
import useLogo from 'hooks/useLogo';
import Image from 'next/future/image';
import loven from 'public/images/mocklogos/klubb_loven.png';
import modo from 'public/images/mocklogos/mini_modo.png';

function GameInfo(props) {
  console.log(props.teamTwo.id);
  const { colors, logo } = useLogo();
  return (
    <div>
      <HomeBtn />
      <HeaderImg />
      <Date />
      <div className={classes.container}>
        <div className={classes.match}>
          <div className={classes.matchHeader}>
            <div className={classes.matchStatus}>Pågår</div>
            <div className={classes.matchTournament}>Örncupen</div>
          </div>
          <div className={classes.matchContent}>
            <div className={classes.column}>
              <div className={`${classes.team} ${classes['team--home']}`}>
                <div className={classes.teamLogo}>
                  {logo && <Image src={loven} alt="Team logo" height="10px" width="10px" />}
                </div>

                <div>
                  <Link
                    href={{
                      pathname: `/orncupen/laginfo/${props.teamOne.id}`,
                    }}
                    className={classes.textWrap}
                  >
                    <h2 className={classes.teamName}>{props.teamOne.name}</h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className={classes.column}>
              <div className={classes.matchDetails}>
                <div className={classes.matchDate}>28 Nov</div>
                <div className={classes.matchScore}>
                  <span className={`${classes.matchScoreNumber} `}>13</span>
                  <span className={classes.matchScoreDivider}>:</span>
                  <span
                    className={`${classes.matchScoreNumber} ${classes.matchScoreNumberLeading} `}
                  >
                    37
                  </span>
                </div>

                <div className={classes.matchReferee}>
                  Domare: <strong>Niclas Pahlfer</strong>
                </div>
              </div>
            </div>
            <div className={classes.column}>
              <div className={`${classes.team} ${classes['team--away']}`}>
                <div className={classes.teamLogo}>
                  {logo && <Image src={modo} alt="Team logo" height="10px" width="10px" />}
                </div>

                <div>
                  <Link
                    href={{
                      pathname: `/orncupen/laginfo/${props.teamTwo.id}`,
                    }}
                    className={classes.textWrap}
                  >
                    <h2 className={classes.teamName}>{props.teamTwo.name}</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
