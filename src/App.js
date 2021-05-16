
import './App.css';

function App() {
const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  return (
    <div className="App">
      <header className="App-header">

        <p>I am React Person</p>
        <Person name={nayoks[0]} nayika="Mousumi" />
        <Person name="Josim" nayika="Shabana" />
        <Person name="BappaRaz" nayika="Cheka"/>
        <Person name="Elias Kanson" nayika="Bobita"/>
      </header>
    </div>
  );
}
function Person(props) {
  const personStyle =
  {
    border: '2px solid red', margin: '10px'
  }
  console.log(props);
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
    </div>
  )
}

export default App;
