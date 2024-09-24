// app/page.tsx

import React from 'react'
import Navbar from '../components/Navbar'

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My Portfolio</h1>
      <p>Hello! I&apos;m Robert, a budding developer learning Next.js.</p>
    </div>
  )
}

export default Home
