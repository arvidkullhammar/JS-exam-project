import KontaktInfo from "../../../components/LagInfoComponents/KontaktInfo";
import react, { useState, useEffect } from "react";

export default function getServerSideProps(context) {
  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/teams")
      .then((rawData) => rawData.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return <div>{teamName}</div>;
}
