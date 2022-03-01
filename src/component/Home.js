import React from 'react'

const Home = ({totalNumber, increateTotal, decreateTotal}) => {
  return (
    <React.Fragment>
      <h2>哈哈{totalNumber}</h2>
      <button onClick={increateTotal}>x 3</button>
      <button onClick={decreateTotal}>- 3</button>
    </React.Fragment>
  );
}

export default Home;


