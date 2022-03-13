import './App.css';
import SidePanel from './SidePanel';
import CardList from './CardList';
import React, { useState, useEffect } from 'react';

function App() {
  const [filterValue, setFilterValue] = useState('start')
  const [coffeeData, setCoffeeData] = useState([])

  console.log({ coffeeData })
  console.log({ filterValue })

  function initFetch() {
    console.log('initFetch confirmed')
    fetch('http://localhost:3000/coffee')
    .then(res => res.json())
    .then(data => setCoffeeData(data))
  }

  useEffect(() => {
    coffeeCardFilter()
    initFetch()
  }, [filterValue])

  function handleSelect(e) {
    e.preventDefault()
    window.scrollTo(0, 0)
    setFilterValue(e.target.value)
    // initFetch()
    // coffeeCardFilter()
    console.log('handleSelect confirmed')
  }

  function coffeeCardFilter() {
    if (filterValue === 'start'){
      console.log('all good')
    } else if (filterValue === 'favorite'){
      favFilter()
    } else console.log('not ready yet')
  }

  function favFilter() {
    let coffeeArr = coffeeData.filter(coffee => coffee.favorite === true)
    setCoffeeData(coffeeArr)
  }

  // let filteredData = coffeeData.map(coffee => {
  //   if (filterValue === 'start') {
  //   } else if (filterValue === 'favorite') {
  //     let favArr = []
  //     coffeeData.map(coffee => {
  //       if (coffee.favorite === true) {
  //         favArr.push(coffee)
  //       }
  //     })
  //     setCoffeeData(favArr)    }
  // })

  // function favoriteSelect() {
  //   let favArr = []
  //   coffeeData.map(coffee => {
  //     if (coffee.favorite === true) {
  //       favArr.push(coffee)
  //     }
  //   })
  //   setCoffeeData(favArr)
  // }

  return (
    <div>
      <SidePanel handleSelect={handleSelect}/>
      <CardList coffeeData={coffeeData}/>
    </div>
  );
}

export default App;
