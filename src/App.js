import './App.css';
import axios from 'axios'
import { parse } from 'postcss';
import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${value}`)
      const parseResponse = []
      for (let i = 0; i < response.data[1].length; i++) {
        parseResponse.push({
          link: response.data[3][1],
          label: response.data[1][i]
        })
      }
      setData(parseResponse)
    }
    loadData()
  }, [value])
  console.log(data, 'data');
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="App">
      <div className='container'>
        <div className="w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
          <input type="search" name="search" id="search" placeholder="Search"
            className="appearance-none w-full outline-none focus:outline-none active:outline-none" onChange={handleChange} />
          <button type="submit" className="ml-1 outline-none focus:outline-none active:outline-none">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
        <div className='main'>
          {
            data.map((dat, index) => (
              <div x-data="{ dropdownOpen: true }" className="relative  flex rounded-full w-full" key={index + Math.random().toFixed(2)}>
                <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-100 flex rounded-full w-full " >
                  {dat.label}
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
