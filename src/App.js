import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Profile } from './components';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}

export default App;
