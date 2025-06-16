'use client'

import { useState } from 'react'

// This is the main page that shows on localhost:3000
export default function Home() {
  // This is where we store the message from the backend
  const [message, setMessage] = useState('')

  // This function runs when we click the button
  const getMessage = async () => {
    // Ask the backend for the message
    const response = await fetch('http://localhost:5000/api/message')
    const data = await response.json()

    // Show the message on the screen
    setMessage(data.message)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Simple Frontend</h1>
      <p>Click the button to get a message from the backend:</p>

      <button onClick={getMessage}>
        Get Message
      </button>

      <p><strong>Message:</strong> {message}</p>
    </div>
  )
}
