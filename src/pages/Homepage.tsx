import * as React from 'react'
import styled from 'styled-components'

import Socials from '~Components/Socials'
import Hero from '~Components/Hero'
import Stats from '~Components/Stats'
import Footer from '~Components/Footer'
import Bio from '~Components/Bio'
import Projects from '~Components/Projects'

const Container = styled.div`
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;

  h1,
  p {
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
    margin-inline-start: 0 !important;
    margin-inline-end: 0 !important;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 766px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1170px) {
    max-width: 1140px;
  }
`

const Row = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }
`

const Homepage = () => {
  return (
    <Container>
      <Hero />
      <Row>
        <Stats />
        <Bio row />
        <Socials />
      </Row>
      <Bio />
      <Projects />
      <Footer />
    </Container>
  )
}

export default Homepage
