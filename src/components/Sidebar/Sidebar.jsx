import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto mb-10 py-4 px-3 text-white rounded  dark:bg-gray-800 position-fixed" >
        <ul className="space-y-2">
          <li>
            <a
              href="#modal"
              className="flex items-center p-2 text-base font-normal -900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="ml-3">Modal</span>
            </a>
          </li>
          <li>
            <a
              href="#button"
              className="flex items-center p-2 text-base font-normal -900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Button</span>
            </a>
          </li>
          <li>
            <a
              href="#button-group"
              className="flex items-center p-2 text-base font-normal -900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                Button Group
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal -900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Checkbox</span>
            </a>
          </li>
          <li>
            <a
              href="#social-buttons"
              className="flex items-center p-2 text-base font-normal -900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                  Social Buttons
              </span>
            </a>
          </li>
          <li>
            <a
              href="#slider"
              className="flex items-center p-2 text-base font-normal -900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Slider</span>
            </a>
          </li>
          <li>
            <a
              href="#image"
              className="flex items-center p-2 text-base font-normal -900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                  Image
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
