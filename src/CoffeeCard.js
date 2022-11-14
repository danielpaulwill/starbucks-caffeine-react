import { useEffect, useState } from "react"

function CoffeeCard({ coffee }) {
  const [favButton, setFavButton] = useState(false)
  const [textDisplay, setTextDisplay] = useState(false)

  useEffect(() => {
    setFavButton(coffee.favorite)
  }, [])

  function handleInfo() {
    setTextDisplay(textDisplay => !textDisplay)
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
    <div className="col-6 col-md-3 coffeeCard" onMouseEnter={handleInfo} onMouseLeave={handleInfo}>
      <div className={textDisplay ? "coffeeInfo" : "noInfo"}>
        <h5>{coffee.name}</h5>
        <p>Serving Size: {coffee.servingSize} fl oz</p>
        <p>Caffeine Content: {coffee.caffeineContent}mg</p>
        <p>Sugar Content: {coffee.sugarContent}g</p>
        <button className="favButton" onClick={favButtonSwitch}>
          {favButton ? "♥" : "♡"}
        </button>
      </div>
      <div className="coffeeImg">
        <img className={textDisplay ? "coffeeCardImageSelect" : "coffeeCardImage"} src={coffee.image}></img>
      </div>
    </div>
  )
}

export default CoffeeCard;