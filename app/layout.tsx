// app/layout.tsx

import React from 'react'
import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'A simple portfolio website',
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
