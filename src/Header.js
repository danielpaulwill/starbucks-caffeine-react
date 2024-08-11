function Header({ handleSelect, handleClick }) {

  return (
    <div className="container-fluid">
        <div className="row title">
          <p className="h2 titleLogo">COFFEE CONFIDENTIAL</p>
        </div>
        <div className="row form">
            <div className="col-md-3">
            </div>
            <div className="col-md-3 formContent">
              <form>
                <select name="style" className="btn btn-light" id="select" onChange={handleSelect}>
                  <option value="start">SELECT CATEGORY</option>
                  <option value="coldBrew">Cold Brew</option>
                  <option value="espresso">Espresso</option>
                  <option value="frappuccino">Frappuccino</option>
                  <option value="icedCoffee">Iced Coffee</option>
                  <option value="latte">Latte</option>
                  <option value="favorite">Favorites</option>
                </select>
              </form>
            </div>
            <div className="col-md-3 formContent">
              <button className="btn btn-light" onClick={handleClick}>Fun Button</button>
            </div>
            <div className="col-md-3">
            </div>
        </div>
        <div className="row info">
          <p className="h6" id="infoText">A normal cup of coffee has 95mg of caffeine</p>
          <br></br>
        </div>
    </div>

  )
}

export default Header;