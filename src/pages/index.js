import React from 'react'
import { Link, graphql } from 'gatsby'
import * as moment from 'moment'

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
          <div>
            <link
              href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
              rel="stylesheet"
              type="text/css"
            />
            <style type="text/css">
              {`
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
     We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
     `}
            </style>
            <div id="mc_embed_signup">
              <form
                action="https://wtf.us19.list-manage.com/subscribe/post?u=ed2164a72b1efdd820003219b&amp;id=3ab754e75c"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <label htmlFor="mce-EMAIL">
                    Get notified when new posts come out.
                  </label>
                  <input
                    type="email"
                    // value=""
                    name="EMAIL"
                    class="email"
                    id="mce-EMAIL"
                    placeholder="email address"
                    required
                  />
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_ed2164a72b1efdd820003219b_3ab754e75c"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div class="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
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
