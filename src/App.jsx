import "./App.css";

import React, { useState, useEffect } from "react";

import ShareList from "./components/ShareList";

const App = () => {
  const url = "https://api.quotable.io/random";
  // let quoteData = {
  //   content: "Let time be your only competitor.",
  //   author: "Ahmed Saber",
  // };
  const [quote, setQuote] = useState([]);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div></div>
      </div>
      <ShareList quote={quote} tags={quote.tags} />
    </>
  );
};

export default App;
