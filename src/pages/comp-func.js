import { useState } from "react";

function Index(props) {
  console.log(props);
  const { fatherSay, sayToFather } = props;
  const [message, setMessage] = useState('function');
  return (
    <div>
      <p style={{ cursor: "pointer" }} onClick={() => setMessage('function1')}>hello {message} component {props?.title}</p>
      <p>from father: {fatherSay}</p>
      <input onChange={(e) => sayToFather(e.target.value)} />
    </div>
  )
}

export default Index;