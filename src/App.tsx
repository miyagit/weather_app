import React, { useState } from 'react';
import Search from './components/Search/Search'
import WeatherList from './components/Wether/WeatherList'
import './App.css';

type State = {
  data: Month | []
}

type Props = {

}

const App: React.FC<Props> = prps => {
  const [state, setState] = useState<State>({ data: [] })
  return (
    <div className="App">
      <Search />
      <WeatherList data={state.data} />
    </div>
  );
}

export default App;
