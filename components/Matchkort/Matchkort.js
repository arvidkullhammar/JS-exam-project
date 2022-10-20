import React from 'react'
import classes from './Matchkort.module.css'

function Matchkort() {
  return (
    <div className={classes.container}>
      <div>Mån 13 nov, 10:00</div>
      <div>Infoknapp</div>
      <div>Domsjö IF - Modo FF</div>
      <div>P15</div>
      <div>Kempevallen</div>
      <div className={classes.matchInfo}>Matchen pågår</div>
      <div className={classes.resultat}>13- 37</div>
    </div>
  )
}
export default Matchkort
