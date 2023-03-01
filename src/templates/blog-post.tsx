import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/Layout'
import SEO from '../components/reusable/SEO'

export const Head = ({ data }: any) => {
  const post = data.markdownRemark
  return <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
}

const BlogPostTemplate = ({ data, pageContext }: any) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <article className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7">
            <h1 className="mt-3">{post.frontmatter.title}</h1>
            <h2 className="fs-4 text-muted">{post.frontmatter.description}</h2>
            <p className="fs-5 mb-5 text-muted">
              <i>Written by Chris {new Date(post.frontmatter.date).toLocaleDateString()}</i>
            </p>
            <section className="blog" dangerouslySetInnerHTML={{ __html: post.html }} />
            {previous?.fields?.slug || next?.fields?.slug && <h3 style={{ paddingTop: `3rem`, paddingBottom: `1rem` }}>More posts:</h3>}
            <nav>
              <ul
                className="d-flex flex-column justify-content-between align-items-center flex-wrap fs-5 my-5"
                style={{
                  listStyle: `none`
                }}
              >
                <li className="my-3" style={{ listStyleType: 'none' }}>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li className="my-3" style={{ listStyleType: 'none' }}>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
