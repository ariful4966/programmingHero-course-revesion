import logo from './logo.svg';
import './App.css';
import ReducerCount from './comonents/ReducerCount/ReducerCount';
import PatientReducer from './comonents/PatientReducer/ParientReducer';


function App() {
  
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientReducer></PatientReducer>
    </div>
  );
}

export default App;
