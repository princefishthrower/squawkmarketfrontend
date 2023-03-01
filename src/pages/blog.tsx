import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout'
import SEO from '../components/reusable/SEO'
import Blog from '../components/pages/blog/Blog'

export const Head = () => <SEO title={`Blog`} description={`Detailed updates and releases from Squawk Market.`} />

const IndexPage = ({ data }: any) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Blog posts={posts} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            description
          }
        }
      }
    }
  }
`
