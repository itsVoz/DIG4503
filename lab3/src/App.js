// Importing necessary packages for lab from React
import React from 'react';
import HomePage from './components/homepage';

// React App funtion
function App() {

  // Defining fname to be = Matt
  const fname = 'Matt';

  // Return statement to link to HomePage
  // firstName will now be set to the value of fname
  return(
    <HomePage firstName={fname} />
  )
}

// Exporting only App
export default App;
