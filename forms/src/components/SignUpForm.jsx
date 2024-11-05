import { useState } from "react";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    // console.log("Hello 👋");
    // const response = await fetch(
    //   "https://fsa-jwt-practice.herokuapp.com/signup"
    // );
    // const result = await response.json();
    // console.log(result);

    try { const response = await fetch(
      "https://fsa-jwt-practice.herokuapp.com/signup"
    );
    const result = await response.json();
    console.log(result);
    } catch (error) {
      setError(error.message);
    }
    // console.log("message")
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
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

export default SignUpForm;
