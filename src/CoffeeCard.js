import { useEffect, useState } from "react"

function CoffeeCard({ coffee }) {
  const [favButton, setFavButton] = useState(coffee.favorite)
  const [textDisplay, setTextDisplay] = useState(false)
  const [width, setWidth] = useState()
  const [windowWidth, setWindowWidth] = useState()

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
    fetch(`https://jetukdejlrbsfrtozagr.supabase.co/rest/v1/Coffee?id=eq.${coffee.id}`, {
      method: "PATCH",
      // mode: "no-cors",
      headers: {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldHVrZGVqbHJic2ZydG96YWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg2NTE5MTEsImV4cCI6MTk4NDIyNzkxMX0.UQFWRGBjPys3q5xwcqNaIDw_nS7djcbtu49NOtmeztQ",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldHVrZGVqbHJic2ZydG96YWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg2NTE5MTEsImV4cCI6MTk4NDIyNzkxMX0.UQFWRGBjPys3q5xwcqNaIDw_nS7djcbtu49NOtmeztQ",
        "Content-Type": "application/json",
        "Prefer": "return=representation",
      },
      body: JSON.stringify({
        favorite: (coffee.favorite = !coffee.favorite)}),
      })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
      setFavButton(favButton => !favButton)
      console.log(data[0])
        })
      }
    })
    
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
        <img className={textDisplay ? "coffeeCardImageSelect" : "coffeeCardImage"} alt="coffee" src={coffee.image}></img>
      </div>
    </div>
  )
}

export default CoffeeCard;