import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
        const response = await fetch(`${apiUrl}/api/health`)
        
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        
        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>🎨 Amazing Tycho</h1>
        <h2>3D Printed Creations</h2>
      </header>
      
      <main>
        <section className="status">
          <h3>Server Status</h3>
          {loading && <p>Loading...</p>}
          {error && <p className="error">Error: {error}</p>}
          {data && <p className="success">{data.message}</p>}
        </section>

        <section className="welcome">
          <p>Welcome to Amazing Tycho! Your 3D printing showcase platform.</p>
        </section>
      </main>
    </div>
  )
}

export default App