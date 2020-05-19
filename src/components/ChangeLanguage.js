import React from 'react'
import LanguageContext from '../contexts/LanguageContext';

const Header = props => {
  const { onLangugeChange } = props
  const lang = React.useContext(LanguageContext)
  return (
    <div className="item">
      Select a languague:
      &nbsp;
      <i className="flag us" onClick={() => onLangugeChange('eng')} />
      <i className="flag vn" onClick={() => onLangugeChange('vie')} />
    </div>
  )
}

export default Header
