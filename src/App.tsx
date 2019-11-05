import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Header user="Adam" />

      <Button primary onClick={() => console.log('clicekd button')}>Add Workout</Button>
    </div>
  );
}

export default App;
