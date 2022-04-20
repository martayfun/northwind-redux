import Counter from './components/Counter'
import IncreaseCounter from './components/IncreaseCounter'
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import './App.css';

function App() {
  return (
    <div>
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
