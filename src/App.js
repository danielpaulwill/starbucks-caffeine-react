import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Header from './Header';
import CardList from './CardList';
import React, { useState, useEffect } from 'react';

function App() {
  const [filterValue, setFilterValue] = useState('start')
  const [coffeeData, setCoffeeData] = useState([])
  const [crazyColors, setCrazyColors] = useState(false)

  function initFetch() {
    fetch("https://jetukdejlrbsfrtozagr.supabase.co/rest/v1/Coffee", {
      method: "GET",
      // mode: "no-cors",
      headers: {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldHVrZGVqbHJic2ZydG96YWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg2NTE5MTEsImV4cCI6MTk4NDIyNzkxMX0.UQFWRGBjPys3q5xwcqNaIDw_nS7djcbtu49NOtmeztQ",
        "Content-Type": "application/json"
      }})
    .then(res => res.json())
    .then(data => {
      setCoffeeData(data.sort((firstCoffee, secondCoffee) => firstCoffee.id - secondCoffee.id))
    })
  }

  useEffect(() => {
    initFetch()
  }, [])
  
  useEffect(() => {
    // Handles setting the coffeeData based on the filterValue
    if (filterValue === 'start'){
      initFetch()
    } else if (filterValue === 'favorite'){
      favFilter()
    } else {
      fetch("https://jetukdejlrbsfrtozagr.supabase.co/rest/v1/Coffee", {
        method: "GET",
        headers: {
          "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldHVrZGVqbHJic2ZydG96YWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg2NTE5MTEsImV4cCI6MTk4NDIyNzkxMX0.UQFWRGBjPys3q5xwcqNaIDw_nS7djcbtu49NOtmeztQ",
          "Content-Type": "application/json",
          "Accept": "application/json"
      }})
      .then(res => res.json())
      .then(data => {
        let filteredData = data.filter(coffee => coffee.coffeeCategory === filterValue)
        let sortedData = filteredData.sort((firstCoffee, secondCoffee) => firstCoffee.id - secondCoffee.id)
        setCoffeeData(sortedData)
      })
    }
  }, [filterValue])

  // Sets filterValue to the selected dropdown value
  function handleSelect(e) {
    e.preventDefault()
    window.scrollTo(0, 0)
    setFilterValue(e.target.value)
  }

  function favFilter() {
    fetch("https://jetukdejlrbsfrtozagr.supabase.co/rest/v1/Coffee", {
      method: "GET",
      // mode: "no-cors",
      headers: {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldHVrZGVqbHJic2ZydG96YWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg2NTE5MTEsImV4cCI6MTk4NDIyNzkxMX0.UQFWRGBjPys3q5xwcqNaIDw_nS7djcbtu49NOtmeztQ",
        "Content-Type": "application/json"
      }})
    .then(res => res.json())
    .then(data => {
      let filteredData = data.filter(coffee => coffee.favorite === true)
      let sortedData = filteredData.sort((firstCoffee, secondCoffee) => firstCoffee.id - secondCoffee.id)
      setCoffeeData(sortedData)
    })


  }

  function handleColorChange() {
    setCrazyColors(crazyColors => !crazyColors)
  }

  return (
    <div>
      <Header handleSelect={handleSelect} handleClick={handleColorChange}/>
      <CardList coffeeData={coffeeData} crazyColors={crazyColors}/>
    </div>
  );
}

export default App;
