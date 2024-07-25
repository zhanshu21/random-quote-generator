import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
function Quote() {
  const [quote, setQuote] = useState({});

  // const [author, setAuthor] = useState("");
  // const handleClick = () => {
  //     setAuthor("new Author");
  //     setQuote("new Quote.")
  // }

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let quotes = data.quotes;
        let index = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[index]);
        console.log(quotes[index]);
        console.log(index);
      });
  };

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="text">
        <p>{quote.quote}</p>
      </div>
      <div id="author" className="author">
        <p>{quote.author}</p>
      </div>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quote.quote}" - ${quote.author}`
        )}`}
        id="tweet-quote"
        className="tweet-quote"
      >
        <FontAwesomeIcon icon={faSquareXTwitter} />
      </a>
      <button id="new-quote" className="new-quote" onClick={fetchQuote}>
        New Quote
      </button>
    </div>
  );
}

export default Quote;
