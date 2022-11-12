function SidePanel({ handleSelect, handleClick }) {

  return (
    <div /*id="controlBar"*/ className="container-fluid">
      {/* <div id="controls"> */}
        <div className="container-fluid title">
          <h3>Starbucks Confidential</h3>
        </div>
        <div id="form">
          <div className="col-3 red">
            <p>hellow rold</p>
          </div>
          <div /*id="formContent"*/ className="col-3 formContent">
            <form>
              <select name="style" id="select" onChange={handleSelect}>
                <option value="start">CATEGORY</option>
                <option value="coldBrew">Cold Brew</option>
                <option value="espresso">Espresso</option>
                <option value="frappuccino">Frappuccino</option>
                <option value="icedCoffee">Iced Coffee</option>
                <option value="latte">Latte</option>
                <option value="favorite">Favorites</option>
              </select>
            </form>
          </div>
          <div className="col-3">
            <button onClick={handleClick}>FUN BUTTON</button>
          </div>
          <div className="col-3">
          </div>

        </div>
        <div id="info">
          <h4 id="infoText">A normal cup of coffee has <br></br>95mg of caffeine</h4>
          <br></br>
          <img 
            src="https://lh3.googleusercontent.com/PaToWpYqlj3RZv46tzYiLm7FvsOxQhjno42QhHSQyqihnVeNGH_mcLCw-iKgf8tTCkmR8jxvsobo6ZUvGQB9f9E_iGfDWSKwnJb_YgD1kGc8uX5l0Qs9zX9Jebdx522haZhp89fyL7oKdLnP4ThQVWLSufIvtoDBG16GdGkHsOUTXPZCT5RRtUP6LpGk0i7jYaZLKXCjrxIRJ8J_QSwt5FqWtYEV6YmfRPcZovN2MGPZGAJbgUb3kiO3cKAqOFThHnzexD3_7d1OLQxqB8ptUtYOMEZ_D_J9miLtFM5IZaHcpDCzvXHOrS-NmTFyek-xdRxpGBUQjC6PmjkCzOGZyYqUZh4KhssjCODzzjAfBSfMevuEtx6c_WGYkrM_AMZDwoB3YtWcKcVM6GLWiwhZ8P2ej7OGlB7d9E3FMTuL9x6qQCyc0jTKe80IJukJQKusB-hhZtmYXsa0JSsOyjpS1vv_LLa0LzLtZmcQ45KkbASCQs2eH9UeuKEUS8Au1KF-0UqpQrGuu_TNSoYXj4q1t7oLkqvVF5iqgmOlnmwxBbuWUSPfkm7MLTA6Of_GserHTQPgC-4wI7f9y2Uy2f6tkOTHVcdwKBbaQRZPwHSt3NJHJaI3ozam5IIN8sjWmMKZOdG_k63Q-KVFReIdFOmlGjT-kSi8Gmv7HKpoKhWo4Psf2nqU8XekeH5B7XVbmHXHG7_REuI8koZGXq0oJ1E_H9pS=w171-h100-no?authuser=0"
            id="infoMug">
          </img>
        </div>
      {/* </div> */}
    </div>

  )
}

export default SidePanel;