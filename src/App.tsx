import React from 'react';
import Search from './components/Search/Search'
import WeatherList from './components/Wether/WeatherList'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Search />
      <WeatherList />
    </div>
  );
}

export default App;
