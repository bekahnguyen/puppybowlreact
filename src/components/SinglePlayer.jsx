import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { fetchSinglePlayer } from "../API";
import { useParams } from "react-router-dom";

function SinglePlayer() {
  const [player, setPlayer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const playerId = useParams();

  let id;
  id = Object.values(playerId);

  useEffect(() => {
    const getPlayerByID = async () => {
      const player = await fetchSinglePlayer(id);
      const playerArray = Object.values(player);
      setPlayer(playerArray);
      setIsLoading(false);
    };
    getPlayerByID();
  }, []);

  if (isLoading) return <h3>Loading...</h3>;

  if (!player) return <h3>404: Player not found</h3>;

  return (
    <div id="singlePlayer">
      {" "}
      <ul key={player.id}>
        {player.map((player) => {
          return (
            <>
              <li> Name: {player.name}</li>
              <li>Breed: {player.breed}</li>
              <li>Current Status: {player.status}</li>
              <li>{player.team}</li>
              <li>
                <img src={player.imageUrl} />
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default SinglePlayer;
