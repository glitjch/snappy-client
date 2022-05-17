import { useState } from "react";
import Instructions from "./Instructions";

// COMPONENT
function App() {
  const [ userDataInput, setUserDataInput ] = useState("")
  const [ result, setResult ] = useState("Empty result")

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("/cors", {
      mode:'cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userDataInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setUserDataInput("");
  }

  return (
    <div>
      <main >
        <Instructions />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user"
            placeholder="Follow the instructions"
            value={userDataInput}
            onChange={(e) => setUserDataInput(e.target.value)}
          />
           <button type="submit">Generate Pitch</button>
        </form>
        <div >{result}</div>
      </main>
    </div>
  );
};

export default App;
