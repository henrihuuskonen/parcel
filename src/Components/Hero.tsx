import * as React from 'react'
import {
  TitleContainer,
  TitleContainerDivider,
  TitleContainerInner,
  TitleContainerName,
  TitleContainerParagraph,
  TitleContainerTitle,
} from '~Components/TitleContainer'
import styled from 'styled-components'

const StyledTitleContainer = styled(TitleContainer)`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const HeroImageContainer = styled.div`
  overflow: hidden;
  height: auto;
`

const HeroImage = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`

const HeroAvatarContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  width: 300px;
  height: 250px;
  background-color: black;
  right: 50px;
  bottom: -150px;
  overflow: hidden;
  box-shadow: -10px -10px #757575;

  @media (max-width: 1170px) {
    right: 30px;
  }

  @media (max-width: 992px) {
    right: 70px;
  }

  @media (max-width: 768px) {
    position: absolute;
    width: 250px;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 10px;
    text-align: center;
  }
`

const HeroAvatarImage = styled.img`
  height: auto;
  width: 100%;
`

const Hero = () => {
  return (
    <StyledTitleContainer>
      <TitleContainerTitle>HERO</TitleContainerTitle>
      <TitleContainerInner>
        <TitleContainerName>Henri Huuskonen</TitleContainerName>
        <TitleContainerDivider />
        <TitleContainerParagraph>Hello</TitleContainerParagraph>
      </TitleContainerInner>
      <HeroImageContainer>
        <HeroImage
          alt="Wireframe background wallpaper"
          src="https://t3.ftcdn.net/jpg/02/80/09/80/240_F_280098052_VGr2NfQI6jAXqy7KzBoswbY95yGtp1cB.jpg"
        />
      </HeroImageContainer>
      <HeroAvatarContainer>
        <HeroAvatarImage
          alt="Avatar image of Henri Huuskonen"
          src="https://www.dropbox.com/s/ysyoqnfqtfhqvjh/henrihuuskonen.png?raw=1"
        />
      </HeroAvatarContainer>
    </StyledTitleContainer>
  )
}

export default Hero
