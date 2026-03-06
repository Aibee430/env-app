import { useEffect } from 'react'
import './App.css'

function App() {
  

  useEffect(() => {
    const envValues = {
      
       VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
      VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
      VITE_APP_TOKEN: import.meta.env.VITE_APP_TOKEN,
    }

     console.log('Vite environment variables:', envValues)
  }, [])

  return (
    <>
      <h1>{import.meta.env.VITE_APP_NAME}</h1>
      
    </>
  )
}

export default App
