import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createFragmentContainer, graphql } from 'react-relay'
import { BrowserRouter } from 'react-router-dom'
import { Grid, Cell } from 'react-mdl'
import { Header, Footer, Routes } from '../'
import styles from './styles.scss'

class App extends Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired
  }
  static defaultProps = {
    children: []
  }
  static childContextTypes = {
    viewer: PropTypes.object.isRequired
  }
  constructor(props, context) {
    super(props, context)
    this.viewer = props.viewer
  }
  getChildContext() {
    return ({ ...this.context, viewer: this.viewer })
  }
  render() {
    return (
      <BrowserRouter>
        <div className={styles.container}>
          <Header />
          <div className={styles.content}>
            <Grid>
              <Cell col={12}>
                <Routes />
              </Cell>
            </Grid>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default createFragmentContainer(App, {
  viewer: graphql`
    fragment App_viewer on Viewer {
      id
    }
  `
})
