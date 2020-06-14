import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar/calendar.js'; //if i name index.js no need to specificate

function App() {
  return (
    <div className="App">
        <Calendar />
    </div>
  );
}

export default App;
