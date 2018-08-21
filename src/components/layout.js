import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children, data, ignoreHeader = false }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Gentium+Basic:400,400i,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Exo:900,900i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic:400,400i,700,700i"
            rel="stylesheet"
          />
        </Helmet>
        {!ignoreHeader && <Header siteTitle={data.site.siteMetadata.title} />}
        <div className={'content' + (ignoreHeader ? '' : ' post-content')}>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
