import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuthHook from './GoogleAuthHook'

const Header = () => {
  return (
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
  )
}

export default Header
