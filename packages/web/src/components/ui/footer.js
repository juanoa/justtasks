import React from "react";

import Icon from '../../images/icon.png'
import {Link} from "gatsby";

// https://kitwind.io/products/kometa/components

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-t">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="JustTasks"
            className="inline-flex items-center"
          >
            <img
              className="h-8 w-auto sm:h-10"
              src={Icon}
              alt="JustTasks logo"
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
              JustTasks
            </span>
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              The only task manager that focuses on what really matters.
              No projects, no priorities, no teams, no labels, just tasks.
            </p>

          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Go to
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/premium"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Premium
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              JustTasks vs.
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Todoist
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Microsoft To-do
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">About JustTasks</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  API <small>(Coming soon)</small>
                </Link>
              </li>
              <li>
                <a
                  href="https://dashboard.justtasks.app"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Web App
                </a>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Mobile App <small>(Soon)</small>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">About me</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://www.juanoa.com/en"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Web
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com/juanoa"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/juanoa_"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.juanoa.com/en/blog"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 sm:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright {new Date().getFullYear()} JustTasks. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;