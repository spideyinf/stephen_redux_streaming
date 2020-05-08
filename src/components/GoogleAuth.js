import React from 'react'

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(null);
  const [auth, setAuth] = React.useState(null);

  React.useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '24057730358-eapk8963ciqj6k24ra7oikvhsern31tn.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        const fetcher = window.gapi.auth2.getAuthInstance()
        setAuth(fetcher)
        setIsSignedIn(fetcher.isSignedIn.get())
      })
    })
  }, [])

  // React.useEffect(() => {
  //   auth && auth.isSignedIn.listen(setIsSignedIn(auth.isSignedIn.get()))
  // }, [auth])

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

export default GoogleAuth
