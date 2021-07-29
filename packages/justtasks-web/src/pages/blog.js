import * as React from "react"
import Layout from "../components/ui/layout";
import Seo from "../components/ui/seo";
import {PostCard} from "../components/posts/postCard";
import {useStaticQuery, graphql} from "gatsby";

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query blogQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt
            frontmatter {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Seo title="Blog"/>
      <Layout>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <h1
                className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-red-500 text-white">
                Blog
              </h1>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">All</span>
          </span>{' '}
              the information you need to stay organized
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Productivity, time management, focus and success
            </p>
          </div>
          <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
            {
              posts.allMarkdownRemark.edges.map(post => <PostCard post={post.node} key={post.node.id}/> )
            }
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BlogPage
