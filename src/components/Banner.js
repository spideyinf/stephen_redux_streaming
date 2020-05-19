import React from 'react'
import LanguageContext from '../contexts/LanguageContext';

const Banner = () => {
  const lang = React.useContext(LanguageContext)
  return lang === 'vietnamese' ? 'Banner của team' : 'Team Banner'

}

export default Banner
