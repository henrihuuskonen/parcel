import * as React from 'react'
import Helmet from 'react-helmet'
import AppleIcon from '../assets/img/apple-touch-icon.png'
import Fav32 from '../assets/img/favicon-32x32.png'
import Fav16 from '../assets/img/favicon-16x16.png'

const HelmetHead = () => (
  <Helmet>
    <link rel="apple-touch-icon" sizes="180x180" href={AppleIcon} />
    <link rel="icon" type="image/png" sizes="32x32" href={Fav32} />
    <link rel="icon" type="image/png" sizes="16x16" href={Fav16} />

    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </Helmet>
)

export default HelmetHead
