import { fetchAllPlayers, fetchSinglePlayer } from "../API";
import SinglePlayer from "./SinglePlayer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const APIURL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2401-ftb-mt-web-pt/players/";

function PlayerCard({ player, setPlayer }) {
  const playerId = useParams();
  const navigate = useNavigate();
  async function handleRemove() {
    try {
      let id = player.id;
      console.log(id);
      const response = await fetch(`${APIURL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

  // TODO
  // Details
  // The user can click a details button (or something similar) on each puppy that will lead them to another page view with specific details on that puppy, such as owner and team name.

  return (
    <>
      <div className="Container">
        <h3>{player.name}</h3>
        <p>{`#${player.id}`}</p>
        <img
          className="Container-picture"
          src={player.imageUrl}
          alt={`photo of ${player.name} the puppy`}
        />
        <div>
          <button onClick={() => navigate(`/players/${player.id}`)}>
            See more Details!
          </button>
          <button onClick={handleRemove}>Remove from roster</button>
        </div>
      </div>
    </>
  );
}

export default PlayerCard;
