import './App.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const App = () => {
  const [quotes, setQuotes] = useState({});
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios
      .get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => {
        setQuotes(response.data.quotes);
        setQuote(response.data.quotes[Math.floor(Math.random() * (101-0))]) 
      })
      .catch(err=> console.log(err))
    }, []) 
  
  const newQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * (101-0))])    
  }

  return (
    <div className="App">
      <div id="quote-box">
        <div className="quote-text">
          <span id="text">{quote.quote}</span>
        </div>
        <div className="quote-author">- <span id="author">{quote.author}</span></div>
        <div className="buttons">
          <a 
            className="tweet-quote" 
            title="Tweet this quote!" 
            target="_blank" 
            rel="noreferrer"
            href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote.quote + '" - ' + quote.author)}>
            <Icon icon="brandico:twitter-bird"/>
          </a>
          <button 
            className="button" 
            id="new-quote" 
            onClick={() => {newQuote()}}
          >
            New quote
          </button>
        </div>

      </div>
      <div className="footer">Made with ♥ by ramdhanihendrie</div>
    </div>
  )
}

export default App;
