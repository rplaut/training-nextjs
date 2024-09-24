// app/about/page.tsx

import React from 'react'
import Navbar from '../../components/Navbar'

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>About Me</h1>
      <p>This is the about page.</p>
    </div>
  )
}

export default About
