import React from "react";

const QuoteCard = ({ quote, saveQuote, fetchNewQuote }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <div className="button-group">
        <button onClick={fetchNewQuote}>New Quote</button>
        <button onClick={saveQuote}>Save to List</button>
      </div>
    </div>
  );
};

export default QuoteCard;
