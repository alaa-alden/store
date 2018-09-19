import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import {
  Home
} from '../../container'
import Styles from './style.scss'

class Router extends React.PureComponent {
  render() {
    return (
      <div className={Styles.container} id="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}
export default withRouter(Router)
