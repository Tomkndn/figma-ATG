import React from "react";
import Modal from "react-bootstrap/Modal";
import create from "../Assets/create.jpg";
import google from "../icons/google.svg";
import facebook from "../icons/facebook.svg";

export default function PopUpModal(props) {
  return (
    <Modal
      {...props}
      className="modal top fade position-fixed"
      id="exampleModal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      aria-hidden="true"
      data-bs-keyboard="true"
      centered
    >
      <Modal.Header
        className="modal-header"
        style={{ backgroundColor: "#EFFFF4" }}
        closeButton
      >
        <Modal.Title
          style={{ color: "#008A45", fontSize: "16px" }}
          id="contained-modal-title-vcenter"
        >
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body d-flex">
        <div className="create-account ml-4 w-50">
          <h2>Create Account</h2>
          <br />
          <div className="input-group">
            <input
              type="text"
              placeholder="First Name"
              className="form-control p-3 bg-#dee2e6"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="form-control p-3 bg-#dee2e6"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="form-control p-3 bg-#dee2e6"
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control p-3 bg-#dee2e6"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control p-3 bg-#dee2e6"
          />
          <button className="mt-2 rounded border-primary w-100 p-2 bg-primary text-light">
            Create Account
          </button>
          <button
            className="mt-2 w-100 border-light rounded p-2 bg-light text-dark"
            href="www.facebook.com"
          >
            <img src={facebook} />
            Sign up with Facebook
          </button>
          <button className="mt-2 w-100 border-light rounded p-2 bg-light text-dark">
            <img src={google} />
            Sign up with Google
          </button>
          <div className="float">
            <p>
              Already have an account?{" "}
              <span
                id="highlight"
                role="button"
                onClick={() => {
                  setSignIn(true);
                }}
              >
                Sign In
              </span>
            </p>
            <p className="card-text">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
        <div className="sign-in w-50 d-flex flex-column" id="sign-in">
          <p align="right">
            Already have an account?{" "}
            <span
              id="highlight"
              role="button"
              onClick={() => {
                props.setSignIn(true);
              }}
            >
              Sign In
            </span>
          </p>
          <img src={create} alt="createAcc" />
          <p className="card-text">
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
