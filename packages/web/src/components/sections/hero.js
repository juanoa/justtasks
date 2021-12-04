import React from 'react'

import DashboardImage from '../../images/dashboard.png'

export const HeroSection = () => {
  return (
    <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <span className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">It's simple, it's easy,</span>{' '}
          <h1 className="block text-red-600 xl:inline">It's JustTasks</h1>
        </span>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          The only task manager that focuses on what really matters. No projects, no priorities, no teams, no labels, just tasks.
        </p>
        <p className="mt-3 text-base font-bold text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Register now and enjoy the free tier forever!
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="https://dashboard.justtasks.app/register"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="https://dashboard.justtasks.app/login"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <img
          src={DashboardImage}
          className="lg:w-2/3 mx-auto"
          alt="Dashboard"
        />
      </div>
    </div>
  )
}