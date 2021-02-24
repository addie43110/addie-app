import React, { useState, useEffect } from "react";
import './Home.css';

function Home(props) {
  const [apiResponse, setapiResponse] = useState("");

  useEffect(() => {
    callAPI();
  }, []);

  
  function callAPI() {
    fetch("http://localhost:3001/home")
      .then(res => res.text())
      .then(res => setapiResponse(res));
  }

  return (
    <div className="welcome-container">
      <p>apiResponse: {apiResponse}</p>
      <h2>Welcome!</h2>
      <p>
        Thanks for checking out my Resumesite 2.0. Resumesite 1.0 was originally written entirely by hand in HTML, CSS, and
        Javascript; In 2020, I was lucky to intern with Daitan Labs of Canada and learned React and Express there, so I 
        figured it was time for a website revamp.
      </p>
    </div>
  );
}

export default Home;