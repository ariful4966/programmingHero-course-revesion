import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/Reducer-Count/ReducerCount';
import PatientManagement from './components/PatientManagement';

function App() {
  
  return (
    <div className="App">
      <ReducerCount />
      <PatientManagement/>
    </div>
  );
}

export default App;
