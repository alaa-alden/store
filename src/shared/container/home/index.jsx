/* eslint camelcase:0 */

import React, {
  Component
} from 'react'
import styles from './style.scss'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles.home}>
        <h1>main page</h1>
      </div>

    )
  }
}

export default Home
