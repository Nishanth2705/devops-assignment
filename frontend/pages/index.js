import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    axios.get("http://localhost:5000/api/message") // Update this to backend public URL later
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage("Error fetching message"))
  }, [])

  return (
    <div>
      <h1>Frontend - Message from Backend:</h1>
      <p>{message}</p>
    </div>
  )
}
