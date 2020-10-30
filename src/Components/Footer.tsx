import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100px;
`

const Text = styled.p`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`

const Footer = () => {
  return (
    <Container id="footer">
      <Text className="footer__text">Henri Huuskonen © Copyright 2020</Text>
    </Container>
  )
}

export default Footer
