import React from 'react'
import { render } from 'react-dom'
import { QueryRenderer, graphql } from 'react-relay'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material'
import environment from './environment'
import { App } from './components'
import './scss/styles.scss'

const query = graphql`
  query indexQuery {
    viewer {
      id
      ...App_viewer
      ...HeaderContainer_viewer
    }
  }
`

render(
  <QueryRenderer
    environment={environment}
    query={query}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>
      } else if (props) {
        return <App viewer={props.viewer} />
      }
      return <div>Loading...</div>
    }}
  />,
  document.body
)
