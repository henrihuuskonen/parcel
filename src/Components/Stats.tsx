import * as React from 'react'
import {
  TitleContainer,
  TitleContainerInner,
  TitleContainerTitle,
} from '~Components/TitleContainer'
import styled from 'styled-components'

const StyledTitleContainer = styled(TitleContainer)`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`

const Row = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Text = styled.p`
  font-size: 14px;
  color: #757575;
  padding: 10px 10px 5px 10px;
`

const BlackText = styled(Text)`
  color: black;
`

interface Data {
  key?: string
  value?: string
}

const data: Data[] = [
  { key: 'Name', value: 'Henri Huuskonen' },
  { key: 'Age', value: '24' },
  { key: 'Nationality', value: 'Finnish' },
  { key: 'Location', value: 'Helsinki, Finland' },
  { key: 'Languages', value: 'Finnish, English' },
  { key: 'Job history' },
  { value: 'Swappie 02-2018 - Present' },
]

const Stats = () => {
  return (
    <StyledTitleContainer>
      <TitleContainerTitle>STATS</TitleContainerTitle>
      <TitleContainerInner>
        {data.map((item: Data) => {
          return item.key && item.value ? (
            <Row key={item.key}>
              <Text>{item.key}</Text>
              <BlackText>{item.value}</BlackText>
            </Row>
          ) : item.key ? (
            <Row key={item.key}>
              <Text>{item.key}</Text>
            </Row>
          ) : item.value ? (
            <BlackText key={item.value}>{item.value}</BlackText>
          ) : (
            ''
          )
        })}
      </TitleContainerInner>
    </StyledTitleContainer>
  )
}

export default Stats
