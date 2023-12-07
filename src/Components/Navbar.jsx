import React from 'react'
import icon from '../Assets/icon.svg'
import search from '../icons/search.svg'
import downArrow from '../icons/down-arrow.svg';

function Navbar(){
    return (
      <nav>
        <div className="title">
          <img src={icon} alt="icon" />
        </div>
        <div className="search">
          <form className="d-flex" role="search">
            <img src={search} alt="search" id="search-icon" />
            <input
              className="form-control me-2"
              id="search-box"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="account" role="button">
          Create account. <span id="highlight">It's free!</span>
          <img src={downArrow} alt="down-arrow" />
        </div>
        <img className="hide" src={downArrow} alt="down-arrow" />
      </nav>
    );
}
export default Navbar;