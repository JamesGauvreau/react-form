import { useState } from "react";

// API_URL = `https://fsa-jwt-practice.herokuapp.com/signup`

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
        console.log(`test try`);
        // const dog = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
        const dog = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
          method: "POST",
          // console.log(`test post`),
          // body: JSON.stringify(x),
          // headers: {"Content-Type" : "application/json"}
        });
        const owner = await dog.json();
        console.log(`test owner below`);
        console.log(owner);
    } catch (error) {
      setError(error.message);
    }
  }

  // cardianl useState rulE: never change the variable directle
  // [...] is a spread operator which can make a new array, e.g. const newPokemonList = [...pokemonList, newPokemon];

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}