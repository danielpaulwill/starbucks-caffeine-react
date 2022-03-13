import CoffeeCard from "./CoffeeCard";

function CardList({ coffeeData }) {

  let coffeeCards = coffeeData.map(coffee => (
    <CoffeeCard coffee={coffee} key={coffee.id}/>
  ));

  return (
    <div id="cardArea">
      {coffeeCards}
    </div>
  )
}

export default CardList;