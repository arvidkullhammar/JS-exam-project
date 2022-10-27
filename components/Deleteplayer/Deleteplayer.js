/** @format */

import React, { useState } from 'react';
import classes from './Deleteplayer.module.css';

export default function DeletePlayer(props) {
  const { id, parentStateCallback } = props;

  const deletePlayer = async () => {
    await fetch('http://localhost:3000/api/players/delete', {
      method: 'DELETE',
      body: id,
    })
      .then((data) => console.log(data))
      .catch((e) => console.log('ERROR', e));
    console.log(id);
    parentStateCallback(id);
  };

  return (
    <div className={classes.deleteBtn}>
      <div onClick={(id) => deletePlayer()}>X</div>
    </div>
  );
}
