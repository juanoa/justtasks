import React, {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon, HomeIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon, StarIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'

import Icon from '../../images/icon.png'
import {Link} from "gatsby";
import {NavbarLastPosts} from "./navbarLastPosts";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {

  const solutions = [
    {
      name: 'Analytics',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
      icon: CursorClickIcon,
    },
    {name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon},
    {
      name: 'Integrations',
      description: "Connect with third-party tools that you're already using.",
      href: '#',
      icon: ViewGridIcon,
    },
    {
      name: 'Automations',
      description: 'Build strategic funnels that will drive your customers to convert',
      href: '#',
      icon: RefreshIcon,
    },
  ]
  const callsToAction = [
    {name: 'Watch Demo', href: '#', icon: PlayIcon},
    {name: 'Contact Sales', href: '#', icon: PhoneIcon},
  ]
  const resources = [
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
      icon: SupportIcon,
    },
    {
      name: 'Guides',
      description: 'Learn how to maximize our platform to get the most out of it.',
      href: '#',
      icon: BookmarkAltIcon,
    },
    {
      name: 'Events',
      description: 'See what meet-ups and other events we might be planning near you.',
      href: '#',
      icon: CalendarIcon,
    },
    {name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon},
  ]

  return (
    <Popover className="relative bg-white">
      {({open}) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div
              className="flex justify-between items-center border-b-2 border-gray-100 py-5 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/">
                  <span className="sr-only">JustTasks</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={Icon}
                    alt="JustTasks logo"
                  />
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                {/*  <Popover className="relative">*/}
                {/*    {({ open }) => (*/}
                {/*      <>*/}
                {/*        <Popover.Button*/}
                {/*          className={classNames(*/}
                {/*            open ? 'text-gray-900' : 'text-gray-500',*/}
                {/*            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'*/}
                {/*          )}*/}
                {/*        >*/}
                {/*          <span>Solutions</span>*/}
                {/*          <ChevronDownIcon*/}
                {/*            className={classNames(*/}
                {/*              open ? 'text-gray-600' : 'text-gray-400',*/}
                {/*              'ml-2 h-5 w-5 group-hover:text-gray-500'*/}
                {/*            )}*/}
                {/*            aria-hidden="true"*/}
                {/*          />*/}
                {/*        </Popover.Button>*/}

                {/*        <Transition*/}
                {/*          show={open}*/}
                {/*          as={Fragment}*/}
                {/*          enter="transition ease-out duration-200"*/}
                {/*          enterFrom="opacity-0 translate-y-1"*/}
                {/*          enterTo="opacity-100 translate-y-0"*/}
                {/*          leave="transition ease-in duration-150"*/}
                {/*          leaveFrom="opacity-100 translate-y-0"*/}
                {/*          leaveTo="opacity-0 translate-y-1"*/}
                {/*        >*/}
                {/*          <Popover.Panel*/}
                {/*            static*/}
                {/*            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"*/}
                {/*          >*/}
                {/*            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">*/}
                {/*              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">*/}
                {/*                {solutions.map((item) => (*/}
                {/*                  <a*/}
                {/*                    key={item.name}*/}
                {/*                    href={item.href}*/}
                {/*                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"*/}
                {/*                  >*/}
                {/*                    <item.icon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true" />*/}
                {/*                    <div className="ml-4">*/}
                {/*                      <p className="text-base font-medium text-gray-900">{item.name}</p>*/}
                {/*                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>*/}
                {/*                    </div>*/}
                {/*                  </a>*/}
                {/*                ))}*/}
                {/*              </div>*/}
                {/*              <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">*/}
                {/*                {callsToAction.map((item) => (*/}
                {/*                  <div key={item.name} className="flow-root">*/}
                {/*                    <a*/}
                {/*                      href={item.href}*/}
                {/*                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"*/}
                {/*                    >*/}
                {/*                      <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />*/}
                {/*                      <span className="ml-3">{item.name}</span>*/}
                {/*                    </a>*/}
                {/*                  </div>*/}
                {/*                ))}*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </Popover.Panel>*/}
                {/*        </Transition>*/}
                {/*      </>*/}
                {/*    )}*/}
                {/*  </Popover>*/}

                <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Home
                </Link>
                <Link to="/premium" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Premium
                </Link>

                <NavbarLastPosts />
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="https://dashboard.justtasks.app/login"
                   className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Sign in
                </a>
                <a
                  href="https://dashboard.justtasks.app/register"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={Icon}
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <Link
                        to="/"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <HomeIcon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true"/>
                        <span className="ml-3 text-base font-medium text-gray-900">Home</span>
                      </Link>
                      <Link
                        to="/premium"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <StarIcon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true"/>
                        <span className="ml-3 text-base font-medium text-gray-900">Premium</span>
                      </Link>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div>
                    <a
                      href="https://dashboard.justtasks.app/register"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Already have an account?{' '}
                      <a href="https://dashboard.justtasks.app/login" className="text-red-600 hover:text-red-500">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Header;
