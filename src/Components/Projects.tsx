import * as React from 'react'
import {
  TitleContainer,
  TitleContainerInner,
  TitleContainerTitle,
} from '~Components/TitleContainer'
import styled from 'styled-components'

const StyledTitleContainer = styled(TitleContainer)`
  height: 500px;
`

const Projects = () => {
  return (
    <StyledTitleContainer>
      <TitleContainerTitle>PROJECTS</TitleContainerTitle>
      <TitleContainerInner></TitleContainerInner>
    </StyledTitleContainer>
  )
}

export default Projects
