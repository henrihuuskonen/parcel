import * as React from 'react'
import * as ReactDOM from 'react-dom'
import HelmetHead from '~Components/HelmetHead'

const App = () => (
  <>
    <HelmetHead />
    <h1>Initial</h1>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
