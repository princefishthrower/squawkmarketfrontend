import React from 'react'
import { Link } from 'gatsby'

const Blog = ({ posts }: any) => {
  return (
    <div className="container my-5 pb-5">
      <div className="text-center">
        <h1>Latest Blog Posts</h1>
        <p className="fs-5 my-3">
          In our blog we get into the details about the philosophy and technology behind Squawk Market. Click on any post to read more.
        </p>
      </div>
      <div className="row row-eq-height">
        {posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug
          const date = node.frontmatter.date
          return (
            <div key={node.fields.slug} className="col-12 my-5 bg-light rounded p-3">
              <Link className='text-decoration-none text-dark' to={node.fields.slug}>
                <h2>{title}</h2>
              </Link>
              <p className="fs-5 my-3">
                <i>{new Date(date).toLocaleDateString()}</i>
              </p>
              <p
                className="fs-5 my-3 mt-auto"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
              <Link className="btn btn-secondary btn-rm" to={node.fields.slug}>
                Read More
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog
