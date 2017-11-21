import React from "react"
import PropTypes from "prop-types"
import { Route, Switch, withRouter,Router } from 'react-router-dom'
import { Layout } from 'antd'
import { ConnectedRouter } from 'react-router-redux'
import SiderNav from './sider-nav'
import ProjectIndex from './project/project-index'
import createHistory from 'history/createBrowserHistory'
export const history = createHistory()
const { Content, Sider } = Layout
const sider = withRouter(SiderNav)

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router history={history}>
        <div id="app">
          <Layout className="bg">
            <Sider><Route component={sider} /></Sider>
            {/* <Layout>
            <Content>
              <Switch>
              <Route exact path="/" component={ProjectIndex} />
              </Switch>
            </Content>
          </Layout> */}
          </Layout>
        </div>
      </Router>

    )
  }
}

// App.propTypes = {
//   getComponent: PropTypes.func.isRequired,
//   layoutSelectors: PropTypes.object.isRequired,
// }

// App.defaultProps = {
// }
