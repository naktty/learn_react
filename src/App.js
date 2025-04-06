import './App.css';
import './referencing-values-with-refs/challenges3.css';
import { useRef } from 'react';

export default function Page() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <>  
      <nav>
        <button onClick={handleClick}>Search</button>
      </nav>
      <input ref={ref}
        placeholder="Looking for something?"
      />
    </>
  );
}
