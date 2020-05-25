import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuthHook from './GoogleAuthHook'

const Header = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <Link to="/" className="item" >
          <h4>
            Twitch
          </h4>
        </Link>
        <div className="right menu">
          <Link to="/" className="item" >
            All Streams
          </Link>
          <GoogleAuthHook />
        </div>
      </div>
    </div>
  )
}

export default Header
