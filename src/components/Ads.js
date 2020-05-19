import React from 'react'
import LanguageContext from '../contexts/LanguageContext';
import Banner from './Banner';

const Ads = () => {
  const lang = React.useContext(LanguageContext)
  return (
    <div className="ui menu secondary" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>{lang === 'vietnamese' ? 'Mời quảng cáo' : 'Ads goes here'}</span>
      <span><Banner /></span>
    </div>
  )
}

export default Ads
