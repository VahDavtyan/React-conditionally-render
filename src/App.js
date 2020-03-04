import React from 'react';

const App = () => {

  const value = 95

  return (
    <div>
      {value >= 10 ? <h2>Grate than 10</h2> : <h3>Less than 10</h3>}
      {/* {value && <span>We have val</span>} */}
    </div>
  );
}

export default App;
