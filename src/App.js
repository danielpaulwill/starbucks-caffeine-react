import './App.css';
import SidePanel from './SidePanel';
import CardList from './CardList';
import React, { useState, useEffect } from 'react';

function App() {
  const [filterValue, setFilterValue] = useState('start')
  const [coffeeData, setCoffeeData] = useState([])
  const [crazyColors, setCrazyColors] = useState(false)

  console.log({ coffeeData })
  console.log({ filterValue })

  function initFetch() {
    fetch('http://localhost:3000/coffee')
    .then(res => res.json())
    .then(data => setCoffeeData(data))
  }

  useEffect(() => {
    initFetch()
  }, [])
  
  useEffect(() => {
    coffeeCardFilter()
  }, [filterValue])

  // Sets filterValue to the selected dropdown value
  function handleSelect(e) {
    e.preventDefault()
    window.scrollTo(0, 0)
    setFilterValue(e.target.value)
  }

  // Handles setting the coffeeData based on the filterValue
  function coffeeCardFilter() {
    if (filterValue === 'start'){
      initFetch()
    } else if (filterValue === 'favorite'){
      favFilter()
    } else {
      otherFilter()
    }
  }

  function favFilter() {
    fetch('http://localhost:3000/coffee')
    .then(res => res.json())
    .then(data => setCoffeeData(data.filter(coffee => coffee.favorite === true)))
  }

  function otherFilter() {
    fetch('http://localhost:3000/coffee')
    .then(res => res.json())
    .then(data => setCoffeeData(data.filter(coffee => coffee.coffeeCategory === filterValue)))
    }

  function handleColorChange() {
    setCrazyColors(crazyColors => !crazyColors)
  }

  return (
    <div>
      <SidePanel handleSelect={handleSelect} handleClick={handleColorChange}/>
      <CardList coffeeData={coffeeData} crazyColors={crazyColors}/>
    </div>
  );
}

export default App;
