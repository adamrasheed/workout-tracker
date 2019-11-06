import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Header user="Adam" />
      {/* Settings */}
      {/* Metrics */}
      <Button primary onClick={() => console.log('clicked button')}>Add Workout</Button>
    </div>
  );
}

export default App;
