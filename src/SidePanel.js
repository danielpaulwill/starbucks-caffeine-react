function SidePanel({ handleSelect, handleClick }) {

  return (
    <div /*id="controlBar"*/ className="container">
      {/* <div id="controls"> */}
        <div id="title">
          <h3>A Tired Parents Guide <br></br> to Starbucks at Home</h3>
          <img 
            src="https://lh3.googleusercontent.com/ZvJfS7LRjHWHEhUaWoqC34UgfHLCN_Sp9qV-zZTpqvkZLp8sVxekxSiz-iFfv-pFRRE_7_JxxNkXeYdzHfwPaX0iNRRphGDXyaBif6r2KmKUOpzvpQtadouRrHlgN6OH8slM8VvcDIJFoCu8VV45gZQ3FHbb1WtUPxcOXE1csDYcvUU68eG02XAHXn76xc7VbhPh3J_i42xUhx4WHqwuwdyM7-kkrF8k_jROaYOKmFeFI7FqF6h_sXn-ka93YC5cQjwomuPZNQLm5fpnQKpenU1-HxLwDsWMgoICZZt1bFga-NGljhgFiVK65AWZFbZsOueJLjHR3UfR42fAr4rZa2q_2MIv3r9KTQWjfFIB5MpAkEIee1n8qYO1IumNsTDpIsPVRStMw-FFYFYqWqAryD8iMAD7AqKgGnKezlK9kZhbodY_j7uJYrUPRxeroQl3mWm06HiFnkqNc5p_af4Ih9DaI_VWwb_HO0Z_PtAEIVe88ls1-lleLHGSwIVJ-o5gReWSY5SKvCUJg_w2hkkzbqmInxNRf3uMGBBpKe1f3BaHzIZzaPkz0PHVFaFUDTN7xdJDJ7HNf1jLvX_-TQakywp3TQ27UjQXAhTLYesbXaDeDRx4BqWz8Jwgnvsm4arg61fXCp8MaY9WmgOvUHshmrqSABOMz8BWYBn1r2tWrlhvq1ygOjXHNw-iwCfBF7wq7_A6ENWHWkN82DkGwr7mTQVx=w280-h56-no?authuser=0"
            id="logo">
          </img>
        </div>
        <div id="form">
          <div id="formContent">
          <h2>Select one of the <br></br>options below <br></br>to filter</h2>
          <form>
            <select name="style" id="select" onChange={handleSelect}>
              <option value="start">Coffee Category</option>
              <option value="coldBrew">Cold Brew</option>
              <option value="espresso">Espresso</option>
              <option value="frappuccino">Frappuccino</option>
              <option value="icedCoffee">Iced Coffee</option>
              <option value="latte">Latte</option>
              <option value="favorite">Favorites</option>
            </select>
          </form>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button onClick={handleClick}>CLICK ME!!!</button>
          <p style={{color: "white"}}>Come on... what's the worst that can happen?</p>
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