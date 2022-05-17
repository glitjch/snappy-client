import { useEffect, useState } from "react";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
const response = openai.listEngines();


function App() {
  const [responseData, setResponseData] = useState()

  const handleClick = () =>{
    setResponseData(response)
  }

  useEffect(() => {
    console.log(responseData)
  }, [responseData])
  

  return (
    <div>
      <button onClick={() =>handleClick()}>click me</button>
      {responseData && "DID IT" + responseData}
    </div>
  );
}

export default App;
