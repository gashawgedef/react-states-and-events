import logo from './logo.svg';
import './App.css';
import Events from './Events';
import Example from './Example';
import Gashity from './Gashity';
import Counter from './Counter';
import Api from './Api';
import Template from './template';

function App() {
  return (
    <div className="App">
      {/* <Events/>
      <Example/> */}
      <Template/>
      <Api/>
      <Counter/>
      <Gashity/>
    </div>
  );
}

export default App;
