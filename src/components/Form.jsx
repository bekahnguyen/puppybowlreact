import { useState } from "react";
import { fetchAllPlayers } from "../API";

const cohortCode = "2401-FTB-MT-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortCode}`;

export default function Form(setPlayers) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2401-FTB-MT-WEB-PT/players/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, breed, imageUrl }),
        }
      );

      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.log(error);
    }
    //do I call fetch all players or do i pull a componant in?
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="Form">
        <p>Add a dog to the team!</p>
        <label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          ></input>
        </label>
        <label>
          <input
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            placeholder="Breed"
          ></input>
        </label>{" "}
        <label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
          ></input>
        </label>
        <button>Submit!</button>
      </form>
    </>
  );
}
