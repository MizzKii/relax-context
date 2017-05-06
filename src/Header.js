import React from 'react'
import PropTypes from 'prop-types'
import { createFragmentContainer, graphql } from 'react-relay'
import Header from './HeaderComponent'

const handleLogout = (viewerId, user) => () => {
  if (user) {
    // Relay.Store.commitUpdate(
    //   new LogoutMutation({ userId: user.id, viewerId }),
    //   { onFailure: transaction => console.log(transaction), onSuccess: res => console.log(res) }
    // )
  }
}

function HeaderContainer({ viewer }) {
  return <Header onLogout={() => handleLogout(viewer.id, viewer.user)} user={viewer.user} />
}
HeaderContainer.propTypes = {
  viewer: PropTypes.object.isRequired
}

const Fragment = createFragmentContainer(HeaderContainer, {
  viewer: graphql`
    fragment HeaderContainer_viewer on Viewer {
      id
      user {
        id
      }
    }
  `,
})

export default class Test extends React.Component {
  static contextTypes = {
    viewer: PropTypes.object
  }
  render() {
    return <Fragment {...this.props} viewer={this.context.viewer} />
  }
}
