import { useState } from "react";

// API_URL = `https://fsa-jwt-practice.herokuapp.com/signup`

// const SignUpForm = () => 

export default function SignUpForm(props) {
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
          body: JSON.stringify({
            username,
            password}),
            headers : {
              "Content-Type": "application/json",
          // body: JSON.stringify(x),
          // headers: {"Content-Type" : "application/json"}
            },
        });
        const owner = await dog.json();
        console.log(`test owner below`);
        console.log(owner);
        props.setToken(owner.token);
    } catch (error) {
      setError(error.message);
    }
  }

  // cardianl useState rulE: never change the variable directle
  // [...] is a spread operator which can make a new array, e.g. const newPokemonList = [...pokemonList, newPokemon];

  return (
    <>
      <h2>Sign Up</h2>
      {/* <p>Typed Username: {username}</p> */}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // e = event
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