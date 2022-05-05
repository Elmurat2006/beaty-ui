// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "./Button/Button";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import Oauth from "./Oauth/Oauth";

// function Navbar(props) {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };
//   console.log(props);
//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize", showButton);

//   return (
//     <>
//       <nav className="navbar mb-5">
//         <div className="navbar-container">
//           <Link to="/">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="40"
//               height="42"
//               viewBox="0 0 36 32"
//               fill="none"
//               className="css-1170n61"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M30.343 21.976a1 1 0
// 									00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0
// 									01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0
// 									01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1
// 									1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0
// 									001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
//                 fill="#007FFF"
//               ></path>
//             </svg>
//           </Link>
//           <div className="menu-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"} />
//           </div>
//           <div className="nav-links ms-5">
//             <Link
//               to="/about"
//               className="text-white link-hover fw-800 fs-bold text-dec-none me-3"
//               onClick={closeMobileMenu}
//             >
//               About us
//             </Link>
//             <Link
//               to="/doc"
//               className="text-white link-hover fw-800 fs-bold text-dec-none me-3"
//               onClick={closeMobileMenu}
//             >
//               Documentation
//             </Link>
//             <Link
//               to="/templates"
//               className="text-white link-hover fw-800 fs-bold text-dec-none me-3"
//               onClick={closeMobileMenu}
//             >
//               Templates
//             </Link>
//           </div>
//           <div
//             onClick={closeMobileMenu}
//             className="right-block"
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginLeft: "640px",
//             }}
//           >

//              {/* <svg
//                 className="me-1 ms-1"
//                 focusable="false"
//                 aria-hidden="true"
//                 width="22px"
//                 height="25px"
//                 fill="#66b2ff"
//                 viewBox="0 0 24 24"
//                 data-testid="SearchIcon"
//               >
//                 <path
//                   d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16
//                 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59
//                 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99
//                 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
//                 ></path>
//               </svg> */}

//             <Oauth />
//           </div>
//         </div>
//       </nav>

//     </>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="" style={{ background: "#071a2e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/About"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About us
                  </Link>

                  <Link
                    to="/doc"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Documentation
                  </Link>

                  <Link
                    to="/Templates"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Templates
                  </Link>
                  <Link
                    to="/profile"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/About"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </Link>

                <Link
                  to="/doc"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Documentation
                </Link>

                <Link
                  to="/Templates"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Templates
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
