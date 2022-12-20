import React from "react";

function Quote({ quote, onClick }) {
  return (
    <div className="container w-50 d-flex align-items-center justify-content-center flex-column text-center mt-5">
      <h3>{ quote }</h3>
      <button className="btn btn-warning mt-3" onClick={onClick}>Random</button>
    </div>
  );
}

export default Quote;
