'use client';

import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const filteredFoods = filterItems(foods, query);
  
  function handleChange(e) {
    setQuery(e.target.value);
  }
  
  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={filteredFoods} />
    </>
  );
}

function SearchBar({query, onChange}) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
