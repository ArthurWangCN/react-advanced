import { useState } from 'react';
import './App.css';
// import Jsx from './pages/jsx';
import Comp from './pages/comp';
import CompFunc from './pages/comp-func'
// import Props from './pages/props';
import ContextFather from './pages/context/father';

function App() {
  const [fatherSay, setFatherSay] = useState('');
  const [childSay, setChildSay] = useState('');
  return (
    <div className="App">
      {/* <Jsx /> */}
      <Comp title="class" />
      <p>child say { childSay }</p>
      <input onChange={(e) => setFatherSay(e.target.value)} />
      <CompFunc title="function" fatherSay={fatherSay} sayToFather={setChildSay} />
      {/* <Props /> */}
      <ContextFather />
    </div>
  );
}

export default App;
