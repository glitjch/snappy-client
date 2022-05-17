import { useEffect, useState } from "react";
import Instructions from "./Instructions";



// COMPONENT
function App() {
  const [userDataInput, setUserDataInput] = useState()

  async function handleClick() {
    const response = await fetch('http://localhost:8080/cors', {mode:'cors', method:'post'});
    const data = await response.json();
    console.log("front", data )
  }

  
  // VIEW
  return (
    <div>
      <Instructions />
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="user"
          placeholder="Enter your info"
          value={userDataInput}
          onChange={(e)=> setUserDataInput(e.target.value)}
        />
          <button type="submit" value="Generate pitch">click me</button>
      </form>
    </div>
  );
}

export default App;
