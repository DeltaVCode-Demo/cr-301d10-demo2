import './App.css';
import Button from 'react-bootstrap/Button';
import Parent from './components/parent';

function App() {
  return (
    <div className="App">
      <h1>Props & State</h1>
      <Parent />
      <Button>Button!</Button>
    </div>
  );
}

export default App;
