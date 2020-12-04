import React from "react";

import "./App.css";

const Card = ({ ans, setAns, title, question, answer, a, b, c, d, e }) => {
  return (
    <>
      <div className="section">
        <div className="container" onClick={() => setAns(answer)}>
          <h3>{title}</h3>
          <p>{question}</p>
          {<p>{ans}</p>}
          <ul>
            <li style={{ listStyleType: "none", textAlign: "left" }}>{a}</li>
            <li style={{ listStyleType: "none", textAlign: "left" }}>{b}</li>
            <li style={{ listStyleType: "none", textAlign: "left" }}>{c}</li>
            <li style={{ listStyleType: "none", textAlign: "left" }}>{d}</li>
            <li style={{ listStyleType: "none", textAlign: "left" }}>{e}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
