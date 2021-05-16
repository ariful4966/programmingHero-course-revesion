
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  return (
    <div className="App">
      <header className="App-header">

        <p>I am React Person</p>
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="Dorshok"></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(props) {

  return (
    <div style={{border: '2px solid blue', width:'400px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
