import { useState } from "react";
import axios from "axios"

function SignUpForm({token, setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try { const {data} = await axios.post(
      "https://fsa-jwt-practice.herokuapp.com/signup",{
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });
    // const result = await response.json();
    setToken(data.token);
    // localStorage.setItem('token', result.token);
    console.log(data)
    } catch (error) {
      setError(error.message);
    }
  }
    // console.log("message")
  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
          type= "email"
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
