import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectTest from './UseEffectTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UseEffectTest />
  )
}

export default App
