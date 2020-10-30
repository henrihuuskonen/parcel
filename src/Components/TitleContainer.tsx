import styled from 'styled-components'

export const TitleContainer = styled.div`
  margin-top: 20px;
  border: 1px solid black;
  position: relative;
`

export const TitleContainerInner = styled.div`
  padding: 1rem;
`

export const TitleContainerTitle = styled.div`
  position: absolute;
  top: -10px;
  left: 10px;
  margin: 0;
  background: white;
  padding: 0 10px 0 10px;
  font-weight: bold;
`

export const TitleContainerDivider = styled.div`
  width: 320px;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TitleContainerName = styled.h1`
  padding: 20px 20px 0 20px;

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 0;
  }
`

export const TitleContainerParagraph = styled.div`
  padding: 10px 0 0 0;
`
