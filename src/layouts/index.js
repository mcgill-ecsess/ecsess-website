import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>ECSESS | Electrical, Computer, Software Engineering Student Society</title>
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
    </Helmet>
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
