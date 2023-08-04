import React from 'react';
import Joke from './Component/Joke';
import JokesData from './Component/JokesData';
import './App.css';
import Stat from './Component/Stat';
import Form from './Component/Form';
function App() {
  const joke = JokesData.map(joe=>{
    return <Joke  setup={joe.setup} puncline={joe.puncline}/>
  })
  return (
    <div className="App">
      <Form/>
<Stat/>
      {joke}
    </div>
  );
}

export default App;
