import React, { useState } from 'react';

function Quote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const handleClick = () => {
        setAuthor("new Author");
        setQuote("new Quote.")
    }

    return (
        <div id="quote-box">
            <div id="text">
                <p>{quote}</p>
            </div>
            <div id="author">
                <p>{author}</p>
            </div>
            <button id='new-quote' onClick={handleClick}>New Quote</button>
            <a href="#" id='tweet-quote'>
                <img src="" alt="" />
            </a>
        </div>
    )
}

export default Quote;