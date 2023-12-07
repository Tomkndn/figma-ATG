import { loc, edit, info, options, eye, share } from "../icons";
import {Data} from '../Data.jsx'
import calender from "../icons/calender.svg";
import work from "../icons/work.svg";
import img3 from "../Assets/img3.svg";
import icon3 from "../Assets/icon3.svg";
import icon4 from "../Assets/icon4.svg";

// import img4 from "../Assets/img4.svg";


function Main() {
  return (
    <div className="d-flex flex-row-reverse justify-content-between">
      <div className="location mt-5" style={{ width: "25%" }}>
        <img src={loc} />
        Noida, India <img align="right" className="shift" src={edit} />
        <hr />
        <p>
          <img src={info} className="shift" />
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
      <main>
        {Data.map((data,index)=>{
            return(
                <section className="card mb-3" key={index}>
                    <img
                        src={data.src}
                        className="card-img-top"
                        alt="..."
                        style={{ height: "50%" }}
                    />
                    <div className="card-body">
                        <h6 className="card-title">{data.title}</h6>
                        <b>{data.desc}</b>
                        <img
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        src={options}
                        alt="option"
                        align="right"
                        />
                        {/* <!-- dropdown list --> */}
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

                        <p className="card-text mb-3">
                        {data.p}
                        </p>
                    </div>
                    <footer className="d-flex m-3" style={{ gap: "15px" }}>
                        <img src={data.icon} alt="icon" />
                        <div className="align-self-center">{data.user}</div>
                        <img src={eye} style={{ marginLeft: "auto" }} alt="eye" />
                        <div className="align-self-center">{data.view}</div>
                        <img src={share} alt="share" />
                    </footer>
                </section>
            )
        })}
        <section className="card mb-3">
          <img
            src={img3}
            className="card-img-top"
            alt="..."
            style={{height: '50%'}}
          />
          <div className="card-body">
            <h6 className="card-title">🗓️ Meetup</h6>
            <b>Finance & Investment Elite Social Mixer @Lujiazui</b>
            <img
              src={options}
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              alt="option"
              align="right"
            />
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
            <div className="d-flex" style={{gap: '100px'}}>
              <p>
                <img src={calender} alt="calender" />
                &nbsp; Fri, 12 Oct, 2018{" "}
              </p>
              <p>
                <img src={loc} alt="location" />
                Ahmedabad, India
              </p>
              {/* <!-- dropdown list -->  */}
            </div>
            <button
              type="button"
              className="btn btn-light"
              style={{width: '100%', border: '1px solid rgb(148, 148, 148)', color: '#E56135'}}
            >
              Visit Website
            </button>
          </div>
          <footer className="d-flex m-3" style={{gap: '15px'}}>
            <img src={icon3} alt="icon" />
            <div className="align-self-center">Sarthak Kamra</div>
            <img src={eye} style={{marginLeft: 'auto'}} alt="eye" />
            <div className="align-self-center">1.4k views</div>
            <img src={share} alt="share" />
          </footer>
        </section>
        <section className="card mb-3">
          <div className="card-body">
            <h6 className="card-title">💼️ Job</h6>
            <b>Software Developer</b>
            <img
              src={options}
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              alt="option"
              align="right"
            />
            {/* <!-- dropdown list --> */}
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

            <div className="d-flex" style={{gap: '100px'}}>
              <p>
                <img src={work} alt="calender" />
                &nbsp; Innovaccer Analytics Private Ltd.
              </p>
              <p>
                <img src={loc} alt="location" />
                Noida, India
              </p>
            </div>
            <button
              type="button"
              className="btn btn-light"
              style={{width: '100%', border: '1px solid rgb(148, 148, 148)', color: '#02B875'}}
            >
              Apply on Timesjobs
            </button>
          </div>
          <footer className="d-flex m-3" style={{gap: '15px'}}>
            <img src={icon4} alt="icon" />
            <div className="align-self-center">Sarthak Kamra</div>
            <img src={eye} style={{marginLeft: 'auto'}} alt="eye" />
            <div className="align-self-center">1.4k views</div>
            <img src={share} alt="share" />
          </footer>
        </section>

      </main>
    </div>
  );
}
export default Main;
