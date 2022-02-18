import './App.css';
import Tabs from './Components/Tabs/Tabs';
import Select from './Components/Select/Select';
import Posts from './Components/Post/Posts';


//Tabs 
const options = [
  { label: 'Tab 1', value: '1' },
  { label: 'Tab 2', value: '2' },
  { label: 'Tab 3', value: '3' }
]


function App() {
  return (
    <div className="App">
      <Select />
      <Tabs options={options} />
      <Posts />
    </div>
  );
}

export default App;
