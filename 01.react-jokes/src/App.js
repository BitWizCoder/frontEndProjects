import { useState, useEffect } from "react";

// import libraries
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

// Import components
import Quote from "./components/Quote";

function App() {
  // state
  const [quote, setQuote] = useState("");

  // get data from api
  function getQuote() {
    axios({
      method: "get",
      url: "https://api.chucknorris.io/jokes/random",
    }).then(function (response) {
      setQuote(response.data.value);
    });
  }
  useEffect(function () {
    getQuote();
  }, []);

  return (
    <div className="App">
      <Quote quote={quote} onClick={getQuote} />
    </div>
  );
}

export default App;

// https://api.chucknorris.io/jokes/random
