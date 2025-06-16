'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error fetching message'));
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Frontend-Backend Integration</h1>
      <p><strong>Message from Flask:</strong> {message}</p>
    </main>
  );
}
