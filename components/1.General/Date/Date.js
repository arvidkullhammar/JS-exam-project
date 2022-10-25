/** @format */

import React from 'react'
import classes from './Date.module.css'
import { DateTime } from 'luxon'

function Date() {
  // write a functions that shows the coming 4 days from today and resets to index 0 after the end of the array

  let day = DateTime.now()
    .toFormat('cccc dd/MM ')
    .replace('Saturday', 'Lör')
    .replace('Sunday', 'Sön')
    .replace('Monday', 'Mån')
    .replace('Tuesday', 'Tis')
    .replace('Wednesday', 'Ons')
    .replace('Thursday', 'Tor')
    .replace('Friday', 'Fre')
  let tomorrow = DateTime.now()
    .plus({ days: 1 })
    .toFormat('cccc dd/MM ')
    .replace('Saturday', 'Lör')
    .replace('Sunday', 'Sön')
    .replace('Monday', 'Mån')
    .replace('Tuesday', 'Tis')
    .replace('Wednesday', 'Ons')
    .replace('Thursday', 'Tor')
    .replace('Friday', 'Fre')
  let dayAftertomorrow = DateTime.now()
    .plus({ days: 2 })
    .toFormat('cccc dd/MM ')
    .replace('Saturday', 'Lör')
    .replace('Sunday', 'Sön')
    .replace('Monday', 'Mån')
    .replace('Tuesday', 'Tis')
    .replace('Wednesday', 'Ons')
    .replace('Thursday', 'Tor')
    .replace('Friday', 'Fre')
  let dayAfterDayAftertomorrow = DateTime.now()
    .plus({ days: 3 })
    .toFormat('cccc dd/MM ')
    .replace('Saturday', 'Lör')
    .replace('Sunday', 'Sön')
    .replace('Monday', 'Mån')
    .replace('Tuesday', 'Tis')
    .replace('Wednesday', 'Ons')
    .replace('Thursday', 'Tor')
    .replace('Friday', 'Fre')

  return (
    <div className={classes.circleContainer}>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>Alla</span>
        </div>
      </div>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>{day}</span>
          <span></span>
        </div>
      </div>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>{tomorrow}</span>
          <span></span>
        </div>
      </div>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>{dayAftertomorrow}</span>
          <span></span>
        </div>
      </div>
      <div className={classes.circle}>
        <div className={classes.textWrap}>
          <span>{dayAfterDayAftertomorrow}</span>
          <span></span>
        </div>
      </div>
    </div>
  )
}
export default Date
