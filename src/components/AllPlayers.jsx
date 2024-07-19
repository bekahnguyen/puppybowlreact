import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard.jsx";
import { fetchAllPlayers } from "../API/index.js";
import { useNavigate } from "react-router-dom";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayers = async () => {
      const players = await fetchAllPlayers();
      setPlayers(players);
      setFilteredPlayers(players);
    };
    getPlayers();
  }, []);

  const onInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(searchTerm)
    );

    setFilteredPlayers(filteredPlayers);
  };

  return (
    <>
      <div className="searchbar">
        <label>
          <input placeholder="find a pup!" onChange={onInputChange} />
        </label>
        <span>
          <h4 onClick={() => navigate("/players/add-player")}>Add Player</h4>
        </span>
      </div>

      <div id="homepage">
        -
        {filteredPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} setPlayers={setPlayers} />
        ))}
      </div>
    </>
  );
}

export default AllPlayers;
