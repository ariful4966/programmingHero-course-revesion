import logo from './logo.svg';
import './App.css';
import SimpleLineChart from './components/LineChart/LineChart'
import StackedAreaChart from './components/StackedAreaChart';
import SimpleBarChart from './components/SimpleBarChart';
import TwoLevelPieChart from './components/TwoLevelPieChart';
import PieChartWithCustomizedLabel from './components/PieChartWithCustomizedLabel';

function App() {
  return (
    <div className="App">
      <h1>Line Chart</h1>
      <SimpleLineChart></SimpleLineChart>
      <StackedAreaChart></StackedAreaChart>
      <SimpleBarChart/>
      <TwoLevelPieChart/>
      <PieChartWithCustomizedLabel/>
    </div>
  );
}

export default App;
