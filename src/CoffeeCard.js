import { useEffect, useState } from "react"

function CoffeeCard({ coffee }) {
  const [favButton, setFavButton] = useState(false)
  const [textDisplay, setTextDisplay] = useState('none')

  console.log({favButton})

  useEffect(() => {
    setFavButton(coffee.favorite)
  }, [])

  function handleMouseEnter() {
    setTextDisplay('block')
  }

  function handleMouseLeave() {
    setTextDisplay('none')
  }

  function favButtonSwitch() {
    setFavButton(favButton => !favButton)
    fetch(`http://localhost:3000/coffee/${coffee.id}`, {
    method: "PATCH",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
    body: JSON.stringify({
    favorite: (coffee.favorite = !coffee.favorite)}),
  })
  .then(response => response.json())
  .then(data => console.log(data.favorite))
  }

  return (
    <div 
      className="coffeeCard"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="coffeeCardImage">
        <img src={coffee.image}></img>
      </div>
      <div 
        className="coffeeInfo"
        style={{display: textDisplay}}
        >
        <h5>{coffee.name}</h5>
        <p>{coffee.servingSize} fl oz</p>
        <p>{coffee.caffeineContent}mg</p>
        <p>{coffee.sugarContent}g</p>
        <button 
          className="favButton"
          onClick={favButtonSwitch}
        >
          {favButton ? "♥" : "♡"}
        </button>
      </div>
    </div>
  )
}

export default CoffeeCard;