import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const pages = data.allMdx.edges.map(({ node }) => node)
  return (
    <Layout ignoreHeader={true}>
      <div id="homepage">
        {/* {JSON.stringify(pages)} */}
        {/* <h1 style={{ fontFamily: 'Exo' }}>Hi people</h1> */}
        <ul>
          <li className="logo">i made a blog</li>
          <li>
            <div>
              <ul id="posts">
                {pages.map(page => (
                  <li>
                    <span className="date">{page.frontmatter.date} </span>
                    <Link to={page.frontmatter.slug}>
                      {page.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
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
            date
          }
        }
      }
    }
  }
`
