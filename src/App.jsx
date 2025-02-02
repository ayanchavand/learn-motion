import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from 'motion/react'
import { Cursor } from './components/Cursor'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center w-screen h-screen cursor-none'>
        <h1 className='text-8xl font-extrabold text-center'>BIG BOLD LETTER FOR IMPACT</h1>
        <Cursor></Cursor>
      </div>
    </>
  )
}

export default App
