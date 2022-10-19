import React from "react";

export default function KontaktInfo(props) {
  fetch("http://localhost:3000/api/teams/")
    .then((rawData) => rawData.json())
    .then((data) => console.log(data));
  return <div></div>;
}
