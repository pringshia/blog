import React from 'react'
import './signup.css'

export default props => (
  <div id="mc_embed_signup" className={props.dark ? 'dark' : ''}>
    <form
      action="https://wtf.us19.list-manage.com/subscribe/post?u=ed2164a72b1efdd820003219b&amp;id=3ab754e75c"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <h2>Get notified of new posts.</h2>
      <div id="mc_embed_signup_scroll">
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">Email Address: </label>
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            placeholder="your@email.com"
          />
        </div>
        <div id="mce-responses" className="clear">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: 'none' }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: 'none' }}
          />
        </div>
        <div
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_ed2164a72b1efdd820003219b_3ab754e75c"
            tabIndex="-1"
            defaultValue=""
          />
        </div>
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        />
      </div>
      <p>Usually a maximum of 1 email a week, if even that.</p>
    </form>
  </div>
)
