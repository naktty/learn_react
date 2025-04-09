import './App.css';
import './manipulating-the-dom-with-refs/challenges3.css';
import { useEffect, useRef } from 'react';

export default function MyInput({ value, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus()
  }, []);
  

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}
