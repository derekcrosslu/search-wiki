import './App.css';
import axios from 'axios'
import { parse } from 'postcss';
import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=Goo`)
      const parseResponse = []
      for (let i = 0; i < response.data[1].length; i++) {
        parseResponse.push({
          id: response.data[3][1],
          label: response.data[1][i]
        })
      }
      setData(parseResponse)

    }
    loadData()
  }, [])
  console.log(data, 'data');
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
