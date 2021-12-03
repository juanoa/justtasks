import React, {Fragment} from 'react'
import {Popover, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/solid";
import {graphql, Link, StaticQuery} from "gatsby";

export const NavbarLastPosts = () => {
  return (
    <Popover className="relative">
      {({open}) => (
        <>
          <Popover.Button
            className={`${open ? 'text-gray-900' : 'text-gray-500'} group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`
            }
          >
            <span>Blog</span>
            <ChevronDownIcon
              className={`${open ? 'text-gray-600' : 'text-gray-400'} ml-2 h-5 w-5 group-hover:text-gray-500`}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
            >
              <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                <div>
                  <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                    Recent Posts
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <StaticQuery
                      query={graphql`
                        query headerQuery {
                          allMarkdownRemark {
                            edges {
                              node {
                                id
                                frontmatter {
                                  slug
                                  title
                                }
                              }
                            }
                          }
                        }
                      `}
                      render={data => {
                        data.allMarkdownRemark.edges.map(post => (
                          <li key={post.node.id} className="text-base truncate">
                            <Link to={`/blog/${post.node.frontmatter.slug}`}
                                  className="font-medium text-gray-900 hover:text-gray-700">
                              {post.node.frontmatter.title}
                            </Link>
                          </li>
                        ))
                      }}
                    />
                  </ul>
                </div>
                <div className="mt-5 text-sm">
                  <a href="#" className="font-medium text-red-600 hover:text-red-500">
                    {' '}
                    View all posts <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}