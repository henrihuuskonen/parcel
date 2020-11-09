import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 10px 0 10px;
  border: 1px solid black;
  width: 350px;
  height: 380px;

  @media (max-width: 1170px) {
    width: 440px;
  }
  @media (max-width: 992px) {
    width: 325px;
  }

  @media (max-width: 768px) {
    width: 485px;
  }

  @media (max-width: 576px) {
    width: 95%;
  }
`

const TitleContainer = styled.div`
  background-color: lightgray;
  height: 20px;
  padding: 5px 10px 5px 10px;
`
const Title = styled.p`
  text-transform: lowercase;
  font-weight: bold;
`

interface ProjectProps {
  text: string
}

const Project = ({ text }: ProjectProps) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{text}</Title>
      </TitleContainer>
    </Container>
  )
}

export default Project
