import { useEffect, useState } from "react"

function CoffeeCard({ coffee }) {
  const [favButton, setFavButton] = useState(false)
  const [textDisplay, setTextDisplay] = useState(false)
  const [width, setWidth] = useState()
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    setFavButton(coffee.favorite)
  }, [])

  useEffect(() => {
    let w = window.innerWidth
    if (w >= 768) {
      setWidth(true)
    } else setWidth(false)
  }, [windowWidth])

  function reportWindowSize() {
    setWindowWidth(window.innerWidth)
  }

  window.addEventListener("resize", reportWindowSize)

  function handleInfo() {
    setTextDisplay(textDisplay => !textDisplay)
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
    <div className={width ? "col-6 col-md-3 coffeeCard1" : "col-6 col-md-3 coffeeCard2"} onMouseEnter={handleInfo} onMouseLeave={handleInfo}>
      <div className={textDisplay ? "coffeeInfo" : "noInfo"}>
        <p className="h6">{coffee.name}</p>
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