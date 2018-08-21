import React from 'react'
import { Link, graphql } from 'gatsby'
import * as moment from 'moment'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const pages = data.allMdx.edges.map(({ node }) => node)
  const sortedPages = pages.sort(
    (a, b) => (moment(a.frontmatter.date) - moment(b.frontmatter.date)) * -1
  )

  return (
    <Layout ignoreHeader={true}>
      <div id="homepage">
        <ul>
          <li className="logo">{data.site.siteMetadata.title}</li>
          <li>
            <div>
              <ul id="posts">
                {sortedPages.map(page => (
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
