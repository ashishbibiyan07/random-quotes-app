import React, { useState, useEffect } from "react";
import "./App.css";
import QuoteCard from "./components/QuoteCard";

const App = () => {
  const [quote, setQuotes] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  // Fetch a random quote from API
  const fetchRandomQuote = async () => {
    try {
      let res = await fetch(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      let data = await res.json();
      console.log(data);
      setQuotes(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRandomQuote(); // Load a random quote on component mount
  }, []);

  // Save quote to list
  const saveQuoteToList = () => {
    if (quote && !savedQuotes.includes(quote)) {
      setSavedQuotes((prev) => [...prev, quote]);
    }
  };

  return (
    <div className="app-container">
      <h1>Random Quotes</h1>

      <QuoteCard
        quote={quote}
        saveQuote={saveQuoteToList}
        fetchNewQuote={fetchRandomQuote}
      />

      <div className="saved-quotes">
        <h2>Saved Quotes</h2>
        {savedQuotes.length === 0 ? (
          <p>No saved quotes yet.</p>
        ) : (
          savedQuotes.map((q, index) => (
            <div key={index} className="quote-card">
              <p>{q}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
