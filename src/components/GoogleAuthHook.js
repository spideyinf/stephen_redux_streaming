import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

const GoogleAuth = props => {
  const { signIn, signOut, isSignedIn } = props
  const authRef = useRef(null)

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      signIn(authRef.current.currentUser.get().getId())
    } else {
      signOut()
    }
  }

  React.useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '24057730358-eapk8963ciqj6k24ra7oikvhsern31tn.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        const fetcher = window.gapi.auth2.getAuthInstance()
        authRef.current = fetcher
        onAuthChange(fetcher.isSignedIn.get())
        fetcher.isSignedIn.listen(onAuthChange)
      })
    })
  }, [isSignedIn])

  const onSignInClick = () => {
    authRef.current.signIn()
  }

  const onSignOutClick = () => {
    authRef.current.signOut()
  }

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return 'null'

    } else if (isSignedIn === true) {
      return (
        <button onClick={onSignOutClick} className="ui red google button"><i className="google icon"></i>Sign Out</button>
      )
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button"><i className="google icon"></i>Sign In with Google</button>
      )
    }
  }

  return renderAuthButton()
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
