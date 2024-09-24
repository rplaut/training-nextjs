// components/Navbar.tsx

import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link href="/">Home</Link> | <Link href="/about">About</Link>
    </nav>
  )
}

export default Navbar
