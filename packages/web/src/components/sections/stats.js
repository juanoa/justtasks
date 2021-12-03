import React from 'react'

export const StatsSection = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mb-12">
        <div className="flex flex-col lg:items-center lg:flex-row">
          <div className="flex items-center mb-6 lg:w-1/2 lg:mb-0">
            <div className="flex items-center justify-center w-16 h-16 mr-5 rounded-full bg-red-50 sm:w-24 sm:h-24 xl:mr-10 xl:w-28 xl:h-28">
              <svg
                className="w-12 h-12 text-red-400 sm:w-16 sm:h-16 xl:w-20 xl:h-20"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h3 className="text-4xl font-extrabold sm:text-5xl xl:text-6xl">
              + 1 000
            </h3>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-800">
              <b className="uppercase">tasks</b> managed with JustTasks, and rising! Join the users who are looking
              for a more minimalist and simple life. Manage your tasks in a simple way
              and don't waste your time in applications that don't bring you anything extra.
            </p>
            <div className="rounded-md mt-10">
              <a
                href="https://dashboard.justtasks.app/register"
                className="items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
              >
                Register now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}