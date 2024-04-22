import { Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import "./App.css";
import Form from "./components/Form";

function App() {
  // TODO
  // Add form to create a new player
  // add the player to all players list without refreshing the page

  // TODO
  // Add styles from previous Puppy Bowl
  // or styles from scratch

  // TODO
  // Add try/catch around functions in useEffect
  // to handle errors
  // HINT: const [hasError, setHasError] = useState(false)

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Puppy Bowl</h1>
      <Form />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
      </Routes>
    </>
  );
}

export default App;
