import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button/Button";
import Oauth from "../components/Oauth/Oauth";
import "./Navbar.css";
import "../pages/MainPage.css";

const Footer = () => {
  return (
    <>
      <hr className="line mt-5 mb-10" />
      <footer className="p-4 sm:p-6">
        <div className="md:flex md:justify-between">
          <div className="d-flex align-center">
            <div className="d-flex gap-4 align-items-center mb-5">
              <div>
                <Link to="/">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </Link>
              </div>
              <Link to="/sign-up">
                <Button className="border-none" buttonSize="btn--large">
                  Sign Up
                </Button>
              </Link>
              <Link to="/sign-in">
                <Button
                  className="border-none"
                  buttonSize="btn--large"
                  buttonStyle="btn--dark"
                >
                  Sign In
                </Button>
              </Link>
              <Oauth />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="d-flex links flex-column">
              <p className="text-white fw-800 fs-bold">Explore</p>
              <Link to="/doc/installation" className="color-grey">
                Installation
              </Link>
              <Link to="/doc/usage" className="color-grey">
                Usage
              </Link>
              <Link to="/doc/example" className="color-grey">
                Example
              </Link>
              <Link to="/doc/templates" className="color-grey">
                Templates
              </Link>
            </div>
            <div className="d-flex links flex-column">
              <p className="text-white fw-800 fs-bold">Company</p>
              <Link to="/doc" className="color-grey">
                About
              </Link>
              <Link to="/doc" className="color-grey">
                Contact
              </Link>
              <Link to="/doc" className="color-grey">
                Support
              </Link>
              <Link to="/Template" className="color-grey">
                Templates
              </Link>
            </div>
            <div className="d-flex links flex-column">
              <p className="text-white fw-800 fs-bold">Resourses</p>
              <Link to="/Template" className="color-grey">
                Components
              </Link>
              <Link to="/Template" className="color-grey">
                Buttons
              </Link>
              <Link to="/Template" className="color-grey">
                Inputs
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
      {/* <hr className="line mt-5 mb-10" />
      <div className="footer d-flex justify-content-between">
        <div className="footer-left mb-5">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="32"
              viewBox="0 0 36 32"
              fill="none"
              className="css-1170n61"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.343 21.976a1 1 0 
                        00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 
                        01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 
                        01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 
                        1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 
                        001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
                fill="#007FFF"
              ></path>
            </svg>
          </Link>
          <p className="fs-8rem fw-700 text-white mt-3">Keep up to date</p>
          <div className="text-white color-grey">
            Join our newsletter for regular updates. No spam ever.
          </div>
          <div className="mt-3 gap-4 d-flex align-items-center">
            <Link to="/sign-up">
              <Button className="border-none" buttonSize="btn--large">
                Sign Up
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button
                className="border-none"
                buttonSize="btn--large"
                buttonStyle="btn--dark"
              >
                Sign In
              </Button>
            </Link>
            <Oauth />
          </div>
        </div>
        <div className="footer-right d-flex mb-5">
          <div className="d-flex links flex-column">
            <p className="text-white fw-800 fs-bold">Explore</p>
            <Link to="/doc/installation" className="color-grey">
              Installation
            </Link>
            <Link to="/doc/usage" className="color-grey">
              Usage
            </Link>
            <Link to="/doc/example" className="color-grey">
              Example
            </Link>
            <Link to="/doc/templates" className="color-grey">
              Templates
            </Link>
          </div>
          <div className="d-flex links flex-column">
            <p className="text-white fw-800 fs-bold">Resourses</p>
            <Link to="/doc/components" className="color-grey">
              Components
            </Link>
            <Link to="/doc/components/buttons" className="color-grey">
              Buttons
            </Link>
            <Link to="/doc/components/inputs" className="color-grey">
              Inputs
            </Link>
          </div>
          <div className="d-flex links flex-column">
            <p className="text-white fw-800 fs-bold">Company</p>
            <Link to="/doc/installation" className="color-grey">
              About
            </Link>
            <Link to="/doc/usage" className="color-grey">
              Contact
            </Link>
            <Link to="/doc/example" className="color-grey">
              Support
            </Link>
            <Link to="/doc/templates" className="color-grey">
              Templates
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
