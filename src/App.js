import { useState, useEffect } from "react";
import Instructions from "./Instructions";
import History from "./History";

import styles from './App.module.css';
//
// COMPONENT
function App() {
  const [ userDataInput, setUserDataInput ] = useState(
    `name: \ncareer: \nspecialty: \njob-description: \ngoal: `);
  const [ result, setResult ] = useState("No pitch yet. Follow the Instructions!");
  const [ error, setError ] = useState("");
  const [ history, setHistory ] = useState([]);

  const [fields, setFields] = useState("")

  // Input length handling
  useEffect(() => {
      if (userDataInput.length < 52 ) {
        setError("Don't delete any of the template! Best results come by keeping them around :) ");
        return;
      }
      if (userDataInput.length > 140) {
        setError("Input may be too long. Keep it simple! Please shorten your input.");
        return;
      }
      setError("");
    }, [userDataInput]);

  async function handleSubmit(event) {
    event.preventDefault();
    // Input error handling:
    // if (
    //   // 1. nothing updated
    //   event.target[0].value === `name: \ncareer: \nspecialty: \njob-description: \ngoal: ` ||
    //   // 2. textarea is blank
    //   event.target[0].value === ``
    //   ) {
    //   setError("Please enter your info after each prompt (name: , career: , etc.)");
    //   return;
    // }
    // if (
    //   // 3. insufficient data
    //   event.target[0].value.length < 70
    //   ) {
    //   setError("Incomplete input. Please add some more detail after each prompt that appear empty or incomplete (name: John, career: chef, etc.)");
    //   return;
    // }

    // API call
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
    setHistory(prev => [
      ...prev, {
        id: history.length,
        input: userDataInput,
        result: data.result
      }
    ]);
    setUserDataInput(`name: \ncareer: \nspecialty: \njob-description: \ngoal: `);
  }
  //
  // VIEW
  return (
    <main className={styles.main}>
        {fields && fields.length}
        <Instructions />
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name-field">Name</label>
          <input id="name-field" name="name" required value={fields.name} minLength={2} onChange={(e)=> setFields({name: e.target.value})}/>
          <label htmlFor="career-field">Career</label>
          <input id="career-field" name="career" required value={fields.career} minLength={2}/>
          <label htmlFor="specialty-field">Specialty</label>
          <input id="specialty-field" name="specialty" required value={fields.specialty} minLength={2}/>
          <label htmlFor="description-field">description</label>
          <input id="description-field" name="description" required value={fields.description} minLength={2}/>
          <label htmlFor="goal-field">Goal</label>
          <input id="goal-field" name="goal" required value={fields.goal} minLength={2}/>
          {/* <textarea
            type="text"
            name="user"
            placeholder="Follow the instructions"
            value={userDataInput}
            onChange={(e) => setUserDataInput(e.target.value)}
          /> */}
           <button type="submit">Generate Pitch</button>
          <span className={error ? styles.error : styles.message}>{!error ? result : error}</span>
        </form>
        <History userHistory={history}/>
      </main>
  );
};

export default App;
