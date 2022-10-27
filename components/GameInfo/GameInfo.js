/** @format */

import React from 'react'
import classes from './GameInfo.module.css'
import HeaderImg from 'components/1.General/HeaderImg/HeaderImg'
import Date from 'components/1.General/Date/Date'
import HomeBtn from 'components/1.General/HomeBtn/HomeBtn'
import Link from 'next/link'

function GameInfo(props) {
  console.log(props)
  return (
    <div>
      <HomeBtn />
      <HeaderImg />
      <Date />
      <div className={classes.container}>
        <div className={classes.match}>
          <div className={classes.matchHeader}>
            <div className={classes.matchStatus}>Live</div>
            <div className={classes.matchTournament}>Örncupen</div>
          </div>
          <div className={classes.matchContent}>
            <div className={classes.column}>
              <div className={`${classes.team} ${classes['team--home']}`}>
                <div className={classes.teamLogo}>
                  <img src="https://assets.codepen.io/285131/whufc.svg" />
                </div>

                <div>
                  <Link
                    href={{
                      pathname: `/{cupnamn}/`,
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
                <div className={classes.matchDate}>
                  28 Nov at <strong>16:00</strong>
                </div>
                <div className={classes.matchScore}>
                  <span className={`${classes.matchScoreNumber} `}>13</span>
                  <span className={classes.matchScoreDivider}>:</span>
                  <span className={`${classes.matchScoreNumber} ${classes.matchScoreNumberLeading} `}>37</span>
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

                <div>
                  <Link
                    href={{
                      pathname: `/{cupnamn}/`,
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
  )
}

export default GameInfo
