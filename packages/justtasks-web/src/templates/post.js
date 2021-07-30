import React from "react"
import {graphql} from "gatsby"
import Seo from "../components/ui/seo";
import Layout from "../components/ui/layout";

const PostTemplate = ({data}) => {
  const {markdownRemark} = data // data.markdownRemark holds your post data
  const {frontmatter, html} = markdownRemark
  return (
    <>
      <Seo title={frontmatter.title} description={frontmatter.description || 'Another blog post'} />
      <Layout>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
            {frontmatter.date}
          </p>
          <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
            <div className="mb-4">
              <h1
                aria-label="Article"
                className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-red-700 sm:text-4xl"
              >
                {frontmatter.title}
              </h1>
            </div>
          </div>
          <div className="mb-10 sm:text-center">
            <div>
              <p
                href="/"
                aria-label="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {frontmatter.author}
              </p>
              <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
            </div>
          </div>
          <div
            className="2xl:max-w-prose prose mx-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
    </>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
      }
    }
  }
`