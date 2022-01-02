import './App.css';
import React, { useState } from 'react'
import { useSearch, useDebounce } from './hooks';
import InputSearch from './components/InputSearch';
import OutputSearch from './components/OutputSearch'

function App() {

  const [value, setValue] = useState('')
  // setting debounce value to half second to optime search performance by waiting for user input 
  const { articles, status, error } = useSearch(useDebounce(value, 500))

  console.log(value, 'value', articles, 'articles', status, 'status', error, 'error');
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="App">
      <InputSearch handleChange={handleChange} />
      <OutputSearch articles={articles} />

    </div>

  );
}

export default App;
