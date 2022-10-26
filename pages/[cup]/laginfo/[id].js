/** @format */
import React, { useEffect, useState } from 'react'
import Image from 'next/future/image'
import Router from 'next/router'
import classes from 'components/TeamInfoComponents/TeamInfo.module.css'
import TeamLogos from 'components/TeamInfoComponents/TeamLogos'
import jersey from 'public/images/lagtröja.png'
import Addplayer from 'components/Addplayer/Addplayer'
import DeletePlayer from 'components/Deleteplayer/Deleteplayer'
import useLogo from 'hooks/useLogo'

export default function TeamInfo(props) {
  const { colors, logo } = useLogo()
  //Update roster when player is added
  const [playerArr, setPlayerArr] = useState(props.players)
  useEffect(() => {
    console.log('updated player roster')
  }, [playerArr])
  const addCallback = (obj) => {
    let newPlayerArr = [...playerArr]
    newPlayerArr.push(obj)
    setPlayerArr(newPlayerArr)
  }

  //Remove roster when player is removed
  const removeCallback = (removeId) => {
    console.log('removeid', removeId)
    let newPlayerArr = [...playerArr]
    let removePlayerIndex = newPlayerArr.findIndex((obj) => obj.id === removeId)
    console.log(removePlayerIndex, 'remove index')

    if (removePlayerIndex > -1) {
      console.log('if run')
      newPlayerArr.splice(removePlayerIndex, 1)
    }

    setPlayerArr(newPlayerArr)
    console.log('newplayerarr', newPlayerArr)
  }

  console.log('colors', colors)

  return (
    <main
      className={classes.lagInfoContainer}
      style={{
        backgroundColor: `rgb(${colors.primary})`,
        border: ` 5px solid rgb(${colors.secondary})`,
      }}
    >
      <header className={classes.headerLogo}>
        {logo && <Image src={logo} alt="klubblogo" width={200} height={200} />}
        <h1>{props.teamName}</h1>
      </header>
      <div className={classes.kontaktInfo}>
        <h2>Kontaktinfo</h2>
        <p>{props.admin}</p>
        <p>{props.email}</p>
      </div>
      <div className={classes.spelarTrupp}>
        <h2 className={classes.spelarTruppText}>Spelartrupp</h2>
        <div>
          {playerArr.map((player) => (
            <div className={classes.spelarDiv} key={player.id}>
              <p className={classes.spelare}>{player.name.charAt(0) + '.' + player.name.substring(player.name.indexOf(' '))}</p>
              <div className={classes.jerseyContainer}>
                <Image src={jersey} alt="Picture of a jersey" width="50px" height="50px" className={classes.jersey} />
                <p className={classes.jerseyNumber}>
                  <b>{player.number}</b>
                </p>
              </div>
              <DeletePlayer id={player.id} parentStateCallback={removeCallback} />
            </div>
          ))}
        </div>
      </div>

      <div className={classes.omkladningsRum}>
        <h2>Spelarverktyg</h2>
        <Addplayer team={props.id} parentStateCallback={addCallback} />
      </div>
      <div className={classes.hittaHit}>
        <h2>Hitta hit</h2>
        <p>Santa Barbara Street 34</p>
        <p>Saint Row aveny 4</p>
      </div>
      <div className={classes.viktigInfo}>
        <h2>Viktig information</h2>
        <p>
          Mindre brand i omklädningsrum 1. <br /> Inget är under kontroll.
        </p>
      </div>
    </main>
  )
}

export async function getServerSideProps({ params }) {
  const [teamRes, playersRes] = await Promise.all([fetch(`http://localhost:3000/api/teams/${params.id}`), fetch(`http://localhost:3000/api/players/${params.id}`)])
  const [team, players] = await Promise.all([teamRes.json(), playersRes.json()])
  return {
    props: {
      id: team.id,
      email: team.email,
      teamName: team.name,
      abr: team.abr,
      admin: team.admin,
      players,
    },
  }
}
