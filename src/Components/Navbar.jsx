import React from 'react'
import icon from '../Assets/icon.svg'
import search from '../icons/search.svg'
import downArrow from '../icons/down-arrow.svg'
import PopUpModal from "./PopUpModal"

function Navbar(){
  const [modalShow, setModalShow] = React.useState(false);
    return (
      <nav>
        <div className="title">
          <img src={icon} alt="icon" />
        </div>
        <div className="search">
          <form className="d-flex" role="search">
            <img
              src={search}
              alt="search"
              onClick={() => {
                document.getElementById("search-box").style.display = "inline";
              }}
              id="search-icon"
            />
            <input
              className="form-control me-2"
              id="search-box"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
          </form>
        </div>
        <div
          className="account"
          role="button"
          onClick={() => setModalShow(true)}
        >
          Create account. <span id="highlight">It's free!</span>
          <img src={downArrow} alt="down-arrow" />
        </div>
        <img
          className="hide"
          src={downArrow}
          onClick={() => setModalShow(true)}
          alt="down-arrow"
        />
        <PopUpModal show={modalShow} onHide={() => setModalShow(false)} />
      </nav>
    );
}
export default Navbar;