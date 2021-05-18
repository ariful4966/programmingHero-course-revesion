import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const nayoks = [{name:'Jasim', age: 56}, {name:'DeepJol', age: 61}, {name: 'BappaRaz', age: 30}, {name:'Omar Sani', age: 35}, {name:'Alomgir', age: 67}]
  const [nayoks, setNayoks] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => {
        setNayoks(data.results)
      })
  }, [])
  return (
    <div className="App">
      <MovieCounter />
      {
        nayoks.map((nk, id) => <Nayok key={id} name={nk.name} phone={nk.cell}></Nayok>)
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
  const { title, first, last } = props.name;
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return (
    <div style={nayokStyle}>
      <h1> {title} {first} {last}</h1>
      <h3>Phone Number {props.phone}</h3>
    </div>
  )
}

export default App;
