import './App.css';
import axios from 'axios'
import { parse } from 'postcss';
import React, { useState, useEffect } from 'react'

function App() {
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=Goo`)

      console.log(response, 'response');

    }
    loadData()
  }, [])
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
