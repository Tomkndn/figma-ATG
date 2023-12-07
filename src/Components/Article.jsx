export default function Article() {
  return (
    <article className="container">
        <header className="header mt-4">
            <a href="#" className="focus">All Posts(32)</a>
            <a href="#">Article</a>
            <a href="#">Event</a>
            <a href="#">Eductaion</a>
            <a href="#">Job</a>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Write a Post
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Edit</a>
                    <a className="dropdown-item" href="#">Report</a>
                    <a className="dropdown-item" href="#">Option 3</a>
                </div>
            </div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary align-self-center"><img src="icons/more.svg" className="shift" alt="plus"/>Join Group</button>
            
        </header>
    </article>
  )
}
