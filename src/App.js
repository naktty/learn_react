import './App.css';
import './referencing-values-with-refs/challenges3.css';
import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  let alertText = useRef('');
  alertText.current = text;

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + alertText.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
