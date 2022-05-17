import { useState } from "react";
import Instructions from "./Instructions";

import styles from './App.module.css';

// COMPONENT
function App() {
  const [ userDataInput, setUserDataInput ] = useState(
    `name: \ncareer: \nspecialty: \njob-description: \ngoal: `);
  const [ result, setResult ] = useState("Empty result");


  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("/pitch", {
      mode:'cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userDataInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setUserDataInput(`name: \ncareer: \nspecialty: \njob-description: \ngoal: `);
  }

  return (
      <main className={styles.main}>
        <Instructions />
        <form className={styles.form} onSubmit={handleSubmit}>
          <textarea
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
  );
};

export default App;
