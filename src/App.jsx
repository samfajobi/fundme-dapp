import Navbar from './component/Navbar'
import { useState } from 'react'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <h1 className="text-4xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
