import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import {
  Router,
} from '../'
import styles from './style.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Store</title>
          <link
            rel="shortcut icon"
            href="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiO4uPL-MbdAhWsxIUKHZ9UD_IQjRx6BAgBEAU&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F2173119%2Fbusiness_front_market_place_retail_store_icon&psig=AOvVaw1EsYDYvK3gDIscE7eclOBR&ust=1537442171902002"
            type="image/x-icon"
          />
        </Helmet>
        <Router />
      </div>
    )
  }
}
export default App

