import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Card , Footer} from './components/Card'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card />
    <Footer />
    <Card />
    <Footer />
    <Card />
    <Footer />
    <Card />
    <Footer />


    </>  )
}

export default App
