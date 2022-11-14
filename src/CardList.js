import CoffeeCard from "./CoffeeCard";

function CardList({ coffeeData, crazyColors }) {

  let coffeeCards = coffeeData.map(coffee => (
    <CoffeeCard coffee={coffee} key={coffee.id}/>
  ));

  return (
    <div id={crazyColors ? "colorCrazy" : "cardArea"} className="row">
      {coffeeCards}
    </div>
  )
}

export default CardList;