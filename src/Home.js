import React, { useState, useEffect } from 'react';

function Home(props) {
  // replaces the constructor
  const [count, setCount] = useState(0);

  useEffect(() => {
    // similar to componentDidMount
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>
        Click me
      </button>
    </div>
  );
}

export default Home;