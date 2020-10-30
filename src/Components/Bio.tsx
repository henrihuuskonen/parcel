import * as React from 'react'
import {
  TitleContainer,
  TitleContainerInner,
  TitleContainerTitle,
} from '~Components/TitleContainer'
import styled, { css } from 'styled-components'

interface StyledTitleContainer {
  row?: boolean
}

const StyledTitleContainer = styled(TitleContainer)<StyledTitleContainer>`
  ${(props) =>
    props.row &&
    css`
      margin-right: 50px;

      @media (max-width: 1170px) {
        margin-right: 20px;
      }

      @media (max-width: 992px) {
        display: none;
      }
    `}

  ${(props) =>
    !props.row &&
    css`
      display: none;

      @media (max-width: 1170px) {
        display: none;
      }
      @media (max-width: 992px) {
        display: block;
      }
    `}
`

interface BioProps {
  row?: boolean
}

const Bio = ({ row }: BioProps) => {
  return (
    <StyledTitleContainer row={row}>
      <TitleContainerTitle>BIO</TitleContainerTitle>
      <TitleContainerInner>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet facilisis leo,
          vel pretium metus cursus ut. Praesent quis augue ligula. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Praesent maximus quam vel urna
          ultricies eleifend. Mauris vitae sapien risus. Integer sit amet condimentum nisi. Nam
          pulvinar mauris eu est semper posuere. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Aliquam vel facilisis velit.
        </p>
      </TitleContainerInner>
    </StyledTitleContainer>
  )
}

export default Bio
