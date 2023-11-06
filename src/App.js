import { useState } from 'react';
import './App.css';
// import Jsx from './pages/jsx';
import Comp from './pages/comp';
import CompFunc from './pages/comp-func'

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
    </div>
  );
}

export default App;
