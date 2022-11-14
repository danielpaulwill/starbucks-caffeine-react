import { useEffect, useState } from "react"

function CoffeeCard({ coffee }) {
  const [favButton, setFavButton] = useState(false)
  const [textDisplay, setTextDisplay] = useState('none')
  const [currentSelect, setCurrentSelect] = useState(false)
  // use currentSelect along with handleInfo function to replace handleMouseEnter & handleMouseLeave

  useEffect(() => {
    setFavButton(coffee.favorite)
  }, [])

  function handleMouseEnter() {
    setTextDisplay('block')
  }

  function handleMouseLeave() {
    setTextDisplay('none')
  }

  function handleInfo() {
    // Build this out to change the currentSelect state gets changed on mouseEnter or mouseExit
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
    <div /*className="coffeeCard"*/ className="col-6 col-md-3 coffeeCard blue" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className="coffeeCardImage" src={coffee.image}></img>
      <div className="coffeeCardImage coffeeInfo" style={{display: textDisplay}}>
        <h5>{coffee.name}</h5>
        <p>Serving Size: {coffee.servingSize} fl oz</p>
        <p>Caffeine Content: {coffee.caffeineContent}mg</p>
        <p>Sugar Content: {coffee.sugarContent}g</p>
        <button className="favButton" onClick={favButtonSwitch}>
          {favButton ? "♥" : "♡"}
        </button>
      </div>
    </div>
  )
}

export default CoffeeCard;