import React, { useState } from "react";
import classes from "../Addplayer/Addplayer.module.css"

export default function DeletePlayer(props) {
const {id,parentStateCallback} = props

  const deletePlayer = async () => {
/*     const newObj = {
      id: id
    } */
    await fetch("http://localhost:3000/api/players/delete", {
      method: "DELETE",
      header: { "Content-Type": "application/json" },
      body: id,
    })
      .then((data) => console.log(data))
      .catch((e) => console.log("ERROR", e));
console.log(id)
    parentStateCallback(id);
  };

  return (
    <div>
      <button onClick={(id) => deletePlayer()}>Ta bort</button>
    </div>
  );
}
