import * as React from 'react'
import {
  TitleContainer,
  TitleContainerInner,
  TitleContainerTitle,
} from '~Components/TitleContainer'
import styled from 'styled-components'

const StyledTitleContainer = styled(TitleContainer)`
  align-self: flex-end;
  margin: auto auto 0;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const SocialsContainer = styled.div`
  display: flex;
  padding: 0.5rem 0 0 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

const SocialsButton = styled.a`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid black;
  transition: 0.3s;
  text-decoration: none;
  color: black;

  &:hover {
    background: darkgray;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 992px) {
    margin: 0 2px 0 2px;
  }

  @media (max-width: 768px) {
    margin: 0 0 5px 0;
  }
`

const Socials = () => {
  return (
    <StyledTitleContainer>
      <TitleContainerTitle>SOCIALS</TitleContainerTitle>
      <TitleContainerInner>
        <SocialsContainer>
          <SocialsButton className="socials__button" href="https://github.com/henrihuuskonen">
            GitHub
          </SocialsButton>
          <SocialsButton
            className="socials__button"
            href="https://www.linkedin.com/in/henri-huuskonen-34850853/"
          >
            LinkedIn
          </SocialsButton>
          <SocialsButton
            className="socials__button"
            href="https://www.facebook.com/huuskonenhenri/"
          >
            Facebook
          </SocialsButton>
          <SocialsButton className="socials__button" href="https://www.instagram.com/huuskonen/">
            Instagram
          </SocialsButton>
        </SocialsContainer>
      </TitleContainerInner>
    </StyledTitleContainer>
  )
}

export default Socials
