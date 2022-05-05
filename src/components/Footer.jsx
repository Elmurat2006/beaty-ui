import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button/Button";
import Oauth from "../components/Oauth/Oauth";
import "./Navbar.css";
import "../pages/MainPage.css";

const Footer = () => {
  return (
    <>
      <hr className="line" />
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
              <Link to="/doc" className="color-grey">
                Installation
              </Link>
              <Link to="/doc" className="color-grey">
                Usage
              </Link>
              <Link to="/doc" className="color-grey">
                Example
              </Link>
              <Link to="/doc" className="color-grey">
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
            <a href="https://www.npmjs.com/package/beaty-ui-library" className="hover:underline">
              Beaty™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
