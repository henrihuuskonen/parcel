import * as React from 'react'
import * as ReactDOM from 'react-dom'
import HelmetHead from '~Components/HelmetHead'
import Homepage from '~pages/Homepage'
import styled from 'styled-components'

const StyledBody = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
`

const App = () => (
  <StyledBody>
    <HelmetHead />
    <Homepage />
  </StyledBody>
)

ReactDOM.render(<App />, document.getElementById('root'))
