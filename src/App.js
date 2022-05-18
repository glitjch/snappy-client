import { useState } from "react";
import Instructions from "./Instructions";

import styles from './App.module.css';

// COMPONENT
function App() {
  const [ userDataInput, setUserDataInput ] = useState(
    `name: \ncareer: \nspecialty: \njob-description: \ngoal: `);
  const [ result, setResult ] = useState("No pitch yet. Follow the Instructions!");
  const [error, setError] = useState("")


  async function handleSubmit(event) {
    event.preventDefault();
    if (event.target[0].value === `name: \ncareer: \nspecialty: \njob-description: \ngoal: `) {
      setError("Please enter your info after each prompt (name: , career: , etc.)");
      return;
    }
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
            onChange={(e) => {
              setError("");
              setUserDataInput(e.target.value)
              }
            }
          />
           <button type="submit">Generate Pitch</button>
          <span className={error ? styles.error : styles.message}>{!error ? result : error}</span>
        </form>
      </main>
  );
};

export default App;
