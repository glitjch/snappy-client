import { useState } from "react";
import Instructions from "./Instructions";



// COMPONENT
function App() {
  const [userDataInput, setUserDataInput] = useState()
  const [ result, setResult ] = useState()

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:8080/cors', {
      mode:'cors', 
      method:'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userData: userDataInput })
    });
    const data = await response.json();
    console.log("front", data )
  }

  // VIEW
  return (
    <div>
      <Instructions />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="Enter your info"
          value={userDataInput}
          onChange={(e)=> setUserDataInput(e.target.value)}
        />
        <button type="submit" value="Generate pitch">Generate Pitch</button>
      </form>
    </div>
  );
}

export default App;
