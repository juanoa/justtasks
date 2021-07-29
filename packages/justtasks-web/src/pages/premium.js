import * as React from "react"
import Layout from "../components/ui/layout";
import Seo from "../components/ui/seo";
import {BadgeCheckIcon, CheckCircleIcon, CheckIcon} from "@heroicons/react/outline";


const PremiumPage = () => {
  return (
    <>
      <Seo title="Premium"/>
      <Layout>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <h1
                className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-red-500 text-white">
                Premium
              </h1>
            </div>
            <h2
              className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ace59d72-08d5-4850-b9e4-d9d0b86c0525"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"/>
                </pattern>
              </defs>
              <rect
                fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Need more?</span>
          </span>{' '}
              Upgrade to JustTask premium at any time
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              JustTasks allows you to enjoy most of the features with the free tier.
              However, you may need more! For all of you, <b>we introduce JustTasks Premium!</b>
            </p>
          </div>
          <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
            <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
              <div className="mb-6">
                <div className="flex items-center justify-between pb-6 mb-6 border-b">
                  <div>
                    <p className="text-5xl font-extrabold">Free</p>
                    <p className="text-sm font-bold tracking-wider uppercase">
                      Forever
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
                    <CheckIcon className="w-10 h-10 text-gray-600" />
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-bold tracking-wide">Features</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="mr-2">
                        <CheckCircleIcon className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="font-medium text-gray-800">
                        Up to 5 tasks per day
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <CheckCircleIcon className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="font-medium text-gray-800">
                        Add notes to tasks
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <CheckCircleIcon className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="font-medium text-gray-800">
                        Mobile App <small>(Soon)</small>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <a
                  href="https://dashboard.justtasks.app/register"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                >
                  Start for free
                </a>
                <p className="text-sm text-gray-600">
                  Get started today with your free account. It's forever!
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
              <div className="mb-6">
                <div className="flex items-center justify-between pb-6 mb-6 border-b">
                  <div>
                    <p className="text-5xl font-extrabold">$4.99</p>
                    <p className="text-sm font-bold tracking-wider uppercase">
                      One pay
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-red-50">
                    <BadgeCheckIcon className="w-10 h-10 text-red-400" />
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-bold tracking-wide">Features</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="mr-2">
                        <CheckCircleIcon className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="font-medium text-gray-800">
                        Unlimited tasks per day
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <CheckCircleIcon className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="font-medium text-gray-800">
                        Add notes to tasks
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <CheckCircleIcon className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="font-medium text-gray-800">
                        Mobile App <small>(Soon)</small>
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <CheckCircleIcon className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="font-medium text-gray-800">
                        More features coming soon!
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <a
                  href="https://dashboard.justtasks.app/register"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-400 hover:bg-red-700 focus:shadow-outline focus:outline-none"
                >
                  Get started
                </a>
                <p className="text-sm text-gray-600">
                  Create an account and then, from the settings menu, upgrade to JustTasks Premium
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PremiumPage
