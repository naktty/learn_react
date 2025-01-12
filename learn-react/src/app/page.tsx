'use client';

import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');
  return (
    <>
      <Input label="First input" value={text} onChange={setText} />
      <Input label="Second input" value={text} onChange={setText} />
    </>
  );
}

function Input({ label, text, onChange }) {
  // const [text, setText] = useState('');

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}
