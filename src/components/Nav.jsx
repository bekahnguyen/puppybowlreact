import { Link, useNavigate } from "react-router-dom";
export default function Nav() {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <nav>
        <h1>PuppyBowl</h1>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button onClick={() => navigate("/players/add-player")}>
            Add Player.
          </button>
        </li>
      </nav>
    </>
  );
}
