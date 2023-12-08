import more from "../icons/more.svg";

export default function Header() {
  return (
    <>
      <header className="header mt-4">
        <a href="#" className="focus">
          All Posts(32)
        </a>
        <a href="#">Article</a>
        <a href="#">Event</a>
        <a href="#">Eductaion</a>
        <a href="#">Job</a>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Write a Post
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Edit
            </a>
            <a className="dropdown-item" href="#">
              Report
            </a>
            <a className="dropdown-item" href="#">
              Option 3
            </a>
          </div>
        </div>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary align-self-center">
          <img src={more} className="shift" alt="plus" />
          Join Group
        </button>
      </header>

      <header className="header-sec">
        <a href="#" className="focus">
          All Posts(32)
        </a>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter: All
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Article
            </a>
            <a className="dropdown-item" href="#">
              Event
            </a>
            <a className="dropdown-item" href="#">
              Education
            </a>
          </div>
        </div>
      </header>
    </>
  );
}