import * as React from 'react'
import Helmet from 'react-helmet'

const HelmetHead = () => (
  <Helmet>
    <link rel="apple-touch-icon" sizes="180x180" href="/public/img/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/public/img/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/public/img/favicon-16x16.png" />

    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </Helmet>
)

export default HelmetHead
