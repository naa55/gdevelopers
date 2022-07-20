import React from 'react'
import '../styles/components/BrandName.scss'
import DevImage from '../assets/gb-original.svg';

const BrandName = ({isFooter = false}) => {
  return (
    <div className={`brand ${isFooter === true ? 'footer': ''}`}>
      <img src={DevImage} alt="work" width={50} height={50} />
        {/* <span>d-g developers</span> */}
    </div>
  )
}

export default BrandName