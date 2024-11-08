import { useState } from "react";
import axios from "axios"

export default function Authenticate({ token }) {
  const [SuccessMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const {data} = await axios.get(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccessMessage(data.message);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div>
      <h2>Authenticate</h2>
      {SuccessMessage && <p> {SuccessMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}
