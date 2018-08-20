import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const pages = data.allMdx.edges.map(({ node }) => node)
  return (
    <Layout>
      {JSON.stringify(pages)}
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {pages.map(page => (
        <div>
          {page.frontmatter.date}{' '}
          <Link to={page.frontmatter.slug}>{page.frontmatter.title}</Link>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
