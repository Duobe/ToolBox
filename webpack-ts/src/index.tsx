import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.less'

const App: React.SFC<{}> = () => <div>hello world</div>
const render = (Component: React.SFC) => ReactDOM.render(<Component />, document.getElementById('app'))

render(App)
