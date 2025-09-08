import '../styles/BackToHomeButton.css'

import React from 'react'
import { ArrowBigLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const BackToHomeButton = () => {

  


  return (
    <Link to="/" className="BackToHomeButtonContainer">
      <ArrowBigLeft size={24} className="BackToHomeButtonIcon" />
    </Link>
  )
}

export default BackToHomeButton
