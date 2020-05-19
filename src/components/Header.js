import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuthHook from './GoogleAuthHook'
import Ads from './Ads'

const Header = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <Link to="/" className="item" >
          Streamy
        </Link>
        <div className="right menu">
          <Link to="/" className="item" >
            All Streams
          </Link>
          <GoogleAuthHook />
        </div>
      </div>
      <Ads />
    </div>
  )
}

export default Header
