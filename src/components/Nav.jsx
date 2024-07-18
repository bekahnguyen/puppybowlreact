import { Link, useNavigate } from "react-router-dom";
export default function Nav() {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <nav id="navbar">
        {" "}
        <h1 id="logo" onClick={() => navigate("/")}>
          PuppyBowl
        </h1>{" "}
      </nav>
    </>
  );
}
