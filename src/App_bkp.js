import React, { Component } from 'react';
import './App.css';
import Image1 from './components/Image1';
import Catalog from './Catalog';
import Catalog2 from './Catalog2';
import Homework from './Homework';

class App extends Component {

  handlerSimpleCall = () => {
    new Homework();
  };

  render() {
  return (
    <div className="App">
      <Catalog2 />
      <header className="App-header">
    
        <p>
         My Test ReactApp1
        </p>
        <script src="./Homework.js" NewHomework></script>
        <button onClick={() => this.handlerSimpleCall()}>HomeWorkLink</button>
          <a
          className="App-link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is google page
        </a>


      </header>
    </div>
  );
}
}

export default App;
