import { useState } from "react"

function CoffeeCard({ coffee }) {
  // const [favButton, setFavButton] = useState(false)
  const [textDisplay, setTextDisplay] = useState('none')

  function handleMouseEnter() {
    setTextDisplay('block')
  }

  function handleMouseLeave() {
    setTextDisplay('none')
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
        >
          {coffee.favorite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  )
}

export default CoffeeCard;