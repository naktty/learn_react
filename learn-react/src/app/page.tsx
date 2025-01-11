'use client';

import { useState } from 'react';

export default function EditProfile() {
  const[mode, setMode] = useState('Browse');
  const[firstName, setFirstName] = useState('Jane');
  const[lastName, setLastName] = useState('Jacobs');
  
  return (
    <form>
      <label>
        First name:{' '}
        {mode==='Edit' ?
          <input
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value);
            }}
          />
          : <b>{firstName}</b>
        }
      </label>
      <label>
        Last name:{' '}
        {mode==='Edit' ?
          <input
            value={lastName}
            onChange={e => {
              setLastName(e.target.value);
            }}
          />
          : <b>{lastName}</b>
        }
      </label>
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          mode==='Edit' ? setMode('Browse') : setMode('Edit');
        }}
      >
        {mode === 'Browse' ? 'Edit Profile' : 'Save Profile'}
      </button>
      <p><i>{`Hello, ${firstName} ${lastName}!`}</i></p>
    </form>
  );
}
