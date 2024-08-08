import React from "react";

function NavigationBar() {
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center">
          <img
            src="/src/assets/pixela_logo.png"
            alt="pixela logo"
            className="w-10 h-10"
          />
        </a>
        <button
          data-collapse-toggle="navbar-menu"
          type="button"
          className="inline-flex items-center p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 mt-4 font-medium bg-gray-50 dark:bg-gray-800 md:bg-white border border-gray-100 rounded-lg dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/livestream"
                className="block py-2 px-3 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
              >
                Live
              </a>
            </li>
            <li>
              <a
                href="/feeling"
                className="block py-2 px-3 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
              >
                Feeling
              </a>
            </li>
          </ul>
        </div>
        <div
          className="md:hidden absolute top-16 left-0 w-full bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700"
          id="navbar-menu"
        >
          <ul className="flex flex-col p-4 font-medium">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/livestream"
                className="block py-2 px-3 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
              >
                Live
              </a>
            </li>
            <li>
              <a
                href="/feeling"
                className="block py-2 px-3 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
              >
                Feeling
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
