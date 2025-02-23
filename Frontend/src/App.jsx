import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Uploader from './components/Uploader'

function App() {

  return (
    <>
    <h1>Upload an Image for Classification</h1>
    <Uploader></Uploader>


    </>
  )
}

export default App
