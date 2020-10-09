import React, { Component } from 'react';

import GuessedWords from './GuestWords'
import Congrats from './Congrats'

class App extends Component {
  
  render(){
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success="false" />
        <GuessedWords guessedWords={[
          {
            guessedWord: 'train',
            letterMatchCount: 3
          }
        ]} />
      </div>
    );
  }
}

export default App;
