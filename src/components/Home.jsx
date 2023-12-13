import React from 'react';
import Confetti from 'react-confetti';

const Home = () => {
  return(
    <div style={ { fontSize: '4rem', marginTop: '4rem', color: 'GrayText'} }>
       <Confetti width={window.innerWidth} height={window.innerHeight} />
       <p> Wohooo! You are <br />
        suceessfully Logged in!! </p>
    </div>
  )
};

export default Home;