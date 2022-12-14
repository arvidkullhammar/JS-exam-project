/** @format */

import React, { useState } from 'react';
import classes from './Addplayer.module.css';

export default function Addplayer(props) {
  const { team, parentStateCallback } = props;
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);

  const addPlayer = async () => {

    const newObj = {
      name: name,
      number: Number(number) + 1,
      team: Number(team),
    };
    await fetch('http://localhost:3000/api/players/add', {
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newObj),
    })
      .then((data) => console.log(data))
      .catch((e) => console.log('ERROR', e));

    setName('');
    setNumber('');
    parentStateCallback(newObj);
  };

  return (
    <div>
      <input
        maxLength={20}
        minLength={4}
        className={classes.inputStyle}
        value={name}
        placeholder="För & Efternamn"
        onChange={(e) => setName(e.target.value)}
      />{' '}
      <select
        className={classes.inputStyle}
        value={number}
        placeholder="Tröjnummer"
        onChange={(e) => setNumber(e.target.value)}
      >
        {[...Array(99)].map((x, i) => (
          <option key={i + 1} value={i}>
           Tröjnummer {i + 1}
          </option>
        ))}
      </select>
      <button className={classes.addPlayerBtn} onClick={() => addPlayer()}>
        Lägg till spelare
      </button>
    </div>
  );
}
