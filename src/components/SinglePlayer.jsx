import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { fetchSinglePlayer } from "../API";
import { useParams } from "react-router-dom";

function SinglePlayer() {
  const [player, setPlayer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const playerId = useParams();
  console.log(playerId);
  let id;
  id = Object.values(playerId);
  console.log(id);

  useEffect(() => {
    const getPlayerByID = async () => {
      const player = await fetchSinglePlayer(id);
      setPlayer(player);
      console.log(player);
      setIsLoading(false);
    };
    getPlayerByID();
  }, []);

  if (isLoading) return <h3>Loading...</h3>;

  if (!player) return <h3>404: Player not found</h3>;

  return (
    <div>
      {" "}
      <ul>
        <li> {player.name}</li>
      </ul>
    </div>
  );
}

export default SinglePlayer;
