import React, { useState } from "react";

export default function Addplayer() {
  const [name, setName] = useState("name");
  const [number, setNumber] = useState(0);
  const [team, setTeam] = useState(1);

  const addPlayer = async () => {
    await fetch("http://localhost:3000/api/players/add", {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        number: Number(number),
        team: Number(team),
      }),
    })
      .then((data) => console.log(data))
      .catch((e) => console.log("ERROR", e));

      setName("Name")
      setNumber(0)
      setTeam(0)
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <input value={team} onChange={(e) => setTeam(e.target.value)} />
      <button onClick={() => addPlayer()}>Submit</button>
    </div>
  );
}
