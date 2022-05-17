import { useState } from "react";
// import Instructions from "./Instructions";



// COMPONENT
function App() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/cors", {
      mode:'cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setAnimalInput("");
  }

  return (
    <div>
      <main >
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div >{result}</div>
      </main>
    </div>
  );
  // const [ userDataInput, setUserDataInput ] = useState("")
  // const [ result, setResult ] = useState("Empty result")

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   const response = await fetch('/cors', {
  //     mode:"cors", 
  //     method:"POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ animal: userDataInput })
  //   });
  //   const data = await response.json();
  //   console.log(data)
  //   setResult(data.result);
  //   setUserDataInput("");
  // }

  // // VIEW
  // return (
  //   <div>
  //     <Instructions />
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         name="user"
  //         placeholder="Enter your info"
  //         value={userDataInput}
  //         onChange={(e)=> setUserDataInput(e.target.value)}
  //       />
  //       <button type="submit">Generate Pitch</button>
  //     </form>
  //     <div>{userDataInput}</div>
  //     <div>{result}</div>
  //   </div>
  // );
}

export default App;
