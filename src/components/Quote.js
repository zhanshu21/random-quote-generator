import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function Quote() {
  const [quote, setQuote] = useState({});
  const [themeColor, setThemeColor] = useState(colors[0]);
  // const [author, setAuthor] = useState("");
  // const handleClick = () => {
  //     setAuthor("new Author");
  //     setQuote("new Quote.")
  // }
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

  const changeThemeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setThemeColor(randomColor);
  }

  const handleNewQuote = () => {
    fetchQuote();
    changeThemeColor();
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    // Apply the theme color to the document's body
    document.body.style.backgroundColor = themeColor;
  }, [themeColor]); // Run this effect whenever the themeColor state changes

  return (
    <div id="quote-box" className="quote-box" style={{color: themeColor}}>
      <div id="text" className="text">
        <p>"{quote.quote}"</p>
      </div>
      <div id="author" className="author">
        <p>- {quote.author}</p>
      </div>
      <div id="function">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote.quote}" - ${quote.author}`
          )}`}
          id="tweet-quote"
          className="tweet-quote"
        >
          <FontAwesomeIcon icon={faSquareXTwitter} className='twitter-icon' style={{color: themeColor}}/>
        </a>
        <button id="new-quote" className="new-quote" onClick={handleNewQuote} style={{backgroundColor: themeColor}}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
