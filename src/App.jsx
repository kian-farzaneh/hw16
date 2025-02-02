import { useState } from 'react'
import ContactProject from './pages/contactProject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactProject />
    </>
  )
}

export default App
