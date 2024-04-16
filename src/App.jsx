import { useState } from 'react'
import { GeneralInfo } from './components/generalInfo.jsx'
import { Education } from './components/education.jsx'
//import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
      <GeneralInfo firstName="John" lastName="Doe" email="johndoe@dev.com" phone="111222333" />
      <Education />
    </>
  )
}

export default App
