import React from 'react'
import { Link, graphql } from 'gatsby'
import * as moment from 'moment'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const pages = data.allMdx.edges.map(({ node }) => node)
  return (
    <Layout ignoreHeader={true}>
      <div id="homepage">
        <ul>
          <li className="logo">i made a blog</li>
          <li>
            <div>
              <ul id="posts">
                {pages.map(page => (
                  <li>
                    <span className="date">
                      {moment(page.frontmatter.date).format('MMM Do')}
                    </span>
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
