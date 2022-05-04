import { Button } from "../components/Button/Button";
import React from "react";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar/Calendar";
import "./MainPage.css";
import CardPost from "../components/CardPost/CardPost";
import Buttons from "../components/Buttons/Buttons";
import Inputs from "../components/Inputs/Inputs";
import Vscode from "../assets/vscode-dev.png";
const MainPage = () => {
  return (
    <div className="">
      <div className="main_page mt-5">
        <div className="firstPage mb-5 d-flex">
          <div className="left-block d-flex flex-column">
            <h1 className="text-white mt-3 h1-text">
              <span className="text-blue ">Move faster </span>
              with intuitive React UI tools
            </h1>
            <p className="text-white p-text my-3">
              MUI offers a comprehensive suite of UI tools to help you ship new
              features faster. Start with Material UI, our fully-loaded
              component library, or bring your own design system to our
              production-ready components.
            </p>
            <div className="d-flex ">
              <Link to="/doc">
                <button className="border-none d-flex align-items-center">
                  <Button className="btn--large ">
                    Get Started
                    <span></span>
                  </Button>
                </button>
              </Link>
              <button className="buttonGlobal ms-4 fw-normal installBtn mb-5">
                <span>npm install beaty ui</span>
              </button>
            </div>
          </div>
          <div className="img-vscode">
            <img src={Vscode} className="ms-5 " alt="" width="800" />
          </div>
        </div>

        <div className="products container-fluid mt-5">
          <div className="secondPage-leftBlock">
            <h2 className="text-blue fw-700 fs-8rem ">Products</h2>
            <h2 className="text-white fw-800 fs-def mx-500">
              Every component you need is{" "}
              <span className="text-blue">ready for production</span>
            </h2>
            <p className="text-white p-text ">
              Build at an accelerated pace without sacrificing flexibility or
              control.
            </p>
          </div>
        </div>
      </div>
      {/* <div> */}
      {/* <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Profile
          </button>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Settings
          </button>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Messages
          </button>
        </div> */}
      {/* <div className="dnone">
          <div className="gridM">
            <Calendar />
            <CardPost />
            <Inputs />
            <Buttons />
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default MainPage;
