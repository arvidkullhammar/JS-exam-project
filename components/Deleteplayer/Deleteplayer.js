import React, { useState } from "react";
import classes from "../Addplayer/Addplayer.module.css"

export default function DeletePlayer(props) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const deletPLayer = async () => {
    await fetch("http://localhost:3000/api/players/delete", {
      method: "DELETE",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify({
        number: Number(id),
      }),
    })
      .then((data) => console.log(data))
      .catch((e) => console.log("ERROR", e));


    setNumber("");
    parentStateCallback();
  };

  return (
    <div>
      <input
        className={classes.inputStyle}
        value={number}
        placeholder="Tröjnummer"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => addPlayer()}>Lägg till spelare</button>
    </div>
  );
}
