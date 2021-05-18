import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = [{name:'Jasim', age: 56}, {name:'DeepJol', age: 61}, {name: 'BappaRaz', age: 30}, {name:'Omar Sani', age: 35}, {name:'Alomgir', age: 67}]
  return (
    <div className="App">
      <MovieCounter />
      {
        nayoks.map(nk=><Nayok name={nk.name} age={nk.age}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter() {
  let [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return <h4>Movies I have acted: {props.movies}</h4>
}

function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok {props.name}</h1>
      <h3>I have done five movies in {props.age || 30} year</h3>
    </div>
  )
}

export default App;
