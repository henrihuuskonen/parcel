import * as React from 'react'
import {
  TitleContainer,
  TitleContainerInner,
  TitleContainerTitle,
} from '~Components/TitleContainer'
import styled from 'styled-components'
import Project from '~Components/Project'
import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { useCurrentWidth } from '~utils/width'
import { useEffect, useState } from 'react'

/*
https://github.com/express-labs/pure-react-carousel
*/

const StyledTitleContainer = styled(TitleContainer)`
  height: 100%;
`

const ProjectsContainer = styled.div`
  display: flex;
  height: 400px;
  margin-top: 20px;

  .carousel {
    width: 100%;
    padding-bottom: 1rem;
  }

  .carousel__dot-group {
    text-align: center;
  }

  .carousel__dot {
    padding: 5px 10px;
    margin: 5px;
    border: 1px solid black;
    height: 5px;
  }

  .carousel__dot--selected {
    background-color: #757575;
  }
`

const Projects = () => {
  const width = useCurrentWidth()
  const [sliderToShow, setSlidesToShow] = useState<number>(3)

  const handleResize = (width: number) => {
    if (width <= 576) return setSlidesToShow(1)
    if (width <= 768) return setSlidesToShow(1)
    if (width <= 992) return setSlidesToShow(2)
    if (width <= 1170) return setSlidesToShow(2)
    if (width > 1170) return setSlidesToShow(3)
  }

  useEffect(() => {
    handleResize(width)
  }, [width])
  return (
    <StyledTitleContainer>
      <TitleContainerTitle>PROJECTS</TitleContainerTitle>
      <TitleContainerInner>
        <ProjectsContainer>
          <CarouselProvider
            visibleSlides={sliderToShow}
            totalSlides={7}
            step={1}
            naturalSlideWidth={300}
            naturalSlideHeight={380}
            isIntrinsicHeight
          >
            <Slider>
              <Slide index={0}>
                <Project text={'henrihuuskonen/brunch'} />
              </Slide>
              <Slide index={1}>
                <Project text={'henrihuuskonen/brunch'} />
              </Slide>
              <Slide index={2}>
                <Project text={'henrihuuskonen/brunch'} />
              </Slide>
              <Slide index={3}>
                <Project text={'henrihuuskonen/brunch'} />
              </Slide>
              <Slide index={4}>
                <Project text={'henrihuuskonen/brunch'} />
              </Slide>
              <Slide index={5}>
                <Project text={'henrihuuskonen/brunch'} />
              </Slide>
              <Slide index={6}>
                <Project text={'henrihuuskonen/brunch'} />
              </Slide>
            </Slider>
            <DotGroup />
          </CarouselProvider>
        </ProjectsContainer>
      </TitleContainerInner>
    </StyledTitleContainer>
  )
}

export default Projects
