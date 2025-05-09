import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginWithMobile from './LoginWithMobile'
import LoginWithEmailPass from './Loignwitemailpass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginWithMobile/>
    <LoginWithEmailPass/>
    </>
  )
}

export default App
