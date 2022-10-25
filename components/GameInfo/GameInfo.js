/** @format */

import React from 'react';
import classes from './GameInfo.module.css';

function GameInfo(props) {
  console.log(props);
  return (
    <div className={classes.container}>
      <div className={classes.match}>
        <div className={classes.matchHeader}>
          <div className={classes.matchStatus}>Live</div>
          <div className={classes.matchTournament}>
            <img src="https://assets.codepen.io/285131/pl-logo.svg" />
            Örncupen
          </div>
        </div>
        <div className={classes.matchContent}>
          <div className={classes.column}>
            <div className={`${classes.team} ${classes['team--home']}`}>
              <div className={classes.teamLogo}>
                <img src="https://assets.codepen.io/285131/whufc.svg" />
              </div>
              <h2 className={classes.teamName}>{props.teamOne.name}</h2>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.matchDetails}>
              <div className={classes.matchDate}>
                28 Nov at <strong>16:00</strong>
              </div>
              <div className={classes.matchScore}>
                <span className={`${classes.matchScoreNumber} `}>13</span>
                <span className={classes.matchScoreDivider}>:</span>
                <span className={`${classes.matchScoreNumber} ${classes.matchScoreNumberLeading} `}>
                  37
                </span>
              </div>
              <div className={classes.matchTimeLapsed}>92'</div>
              <div className={classes.matchReferee}>
                Domare: <strong>Anders Borg</strong>
              </div>
            </div>
          </div>
          <div className={classes.column}>
            <div className={`${classes.team} ${classes['team--away']}`}>
              <div className={classes.teamLogo}>
                <img src="https://assets.codepen.io/285131/chelsea.svg" />
              </div>
              <h2 className={classes.teamName}>{props.teamTwo.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
