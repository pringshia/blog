import React from 'react'
import { Link, graphql } from 'gatsby'
import * as moment from 'moment'
import SignupForm from '../components/signup'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const pages = data.allMdx.edges
    .map(({ node }) => node)
    .filter(page => !page.frontmatter.draft)
  const sortedPages = pages.sort(
    (a, b) => (moment(a.frontmatter.date) - moment(b.frontmatter.date)) * -1
  )

  return (
    <Layout isForPost={false}>
      <div id="homepage">
        <ul style={{ padding: '0 30px' }}>
          <li className="logo">{data.site.siteMetadata.title}</li>
          <li>
            <div>
              <ul id="posts">
                {sortedPages.map(page => (
                  <li key={page.frontmatter.slug}>
                    <span className="date">
                      {page.frontmatter.displayDate ||
                        moment(page.frontmatter.date).format('MMM Do')}
                    </span>
                    <Link to={page.frontmatter.slug}>
                      {page.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SignupForm />
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
            displayDate
            draft
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
