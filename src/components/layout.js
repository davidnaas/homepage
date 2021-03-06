import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'

if (process && process.env.NOW_LOGS_SECRET) {
  require('now-logs')(process.env.NOW_LOGS_SECRET)
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="David | Nääs"
      meta={[
        {name: "viewport", content: "width=device-width, initial-scale=1"},
      ]}
      link={[
        {href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700', rel: 'stylesheet'}
      ]}
    />
    <div>
      {children}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
