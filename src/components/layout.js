import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Signup from './signup'

const Layout = ({ children, data, isForPost = true }) => (
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
            {
              name: 'description',
              content: 'A young blog just trying to make it in this world.',
            },
            { name: 'keywords', content: 'technology, thoughts, ideas' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
        >
          <html lang="en" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-128036355-1"
          />
          <script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-128036355-1');
            `}
          </script>

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
        {isForPost && <Header siteTitle={data.site.siteMetadata.title} />}
        <div className={'content' + (isForPost ? ' post-content' : '')}>
          {children}
        </div>
        {isForPost && (
          <div
            style={{
              margin: '-80px 0',
              borderTop: '1px solid #eee',
              paddingTop: 50,
              paddingBottom: 80,
              backgroundColor: '#eee',
            }}
          >
            <Signup dark />
          </div>
        )}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
