import React, { useState } from "react";
import classes from "./Addplayer.module.css";

export default function Addplayer(props) {
  const { team, parentStateCallback } = props;
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addPlayer = async () => {
    const newObj = {
      name: name,
        number: Number(number),
        team: Number(team),
    }
    await fetch("http://localhost:3000/api/players/add", {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(newObj),
    })
      .then((data) => console.log(data))
      .catch((e) => console.log("ERROR", e));

    setName("Name");
    setNumber(0);
    parentStateCallback(newObj);
  };

  return (
    <div>
      <input
        className={classes.inputStyle}
        value={name}
        placeholder="För & Efternamn"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={classes.inputStyle}
        value={number}
        placeholder="Tröjnummer"
        onChange={(e) => setNumber(e.target.value)}
      />
      {/*       <input value={team} onChange={(e) => setTeam(e.target.value)} /> */}
      <button onClick={() => addPlayer()}>Lägg till spelare</button>
    </div>
  );
}
