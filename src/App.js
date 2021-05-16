import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Dr. Mahfuz",
    job: "Singer"
  }
  var person2 = {
    name: 'Eva Rahman',
    job: 'Kokil Konthi'
  }
  var style ={
    color:'red',
    background: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={style}> {person.name + ' ' + person.job}</h1>
        <h3 style={{color: 'saddlebrown', background: 'gray'}}> {person2.name + ' ' + person2.job}</h3>
        <p>My frist react Pragraph</p>

      </header>
    </div>
  );
}

export default App;
