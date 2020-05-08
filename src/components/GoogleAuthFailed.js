import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

const GoogleAuth = props => {
  const [auth, setAuth] = React.useState(null);
  const { signIn, signOut, isSignedIn } = props

  React.useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '24057730358-eapk8963ciqj6k24ra7oikvhsern31tn.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        const fetcher = window.gapi.auth2.getAuthInstance()
        setAuth(fetcher)
        onAuthChange(fetcher.isSignedIn.get())
        fetcher.isSignedIn.listen(onAuthChange)
      })
    })
  }, [])

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      signIn(auth.currentUser.get().getId())
    } else {
      signOut()
    }
  }

  const onSignInClick = () => {
    auth.signIn()
  }

  const onSignOutClick = () => {
    auth.signOut()
  }

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null

    } else if (isSignedIn === true) {
      console.log('isSignedIn: ', isSignedIn)
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
