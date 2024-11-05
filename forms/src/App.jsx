import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import Authenticate from './components/Authenticate';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUpForm/>
      <Authenticate/>
    </>
  )
}

export default App
