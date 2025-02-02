import React, { useEffect, useState } from 'react'

export const Cursor = () => {

  const [position, setPosition] = useState({x: 0, y:0})

  useEffect(()=>{
    const updatePos = (e) =>{
      setPosition({x: e.clientX, y: e.clientY})
    }

    window.addEventListener("mousemove", updatePos)
    //Cleanup function
    return () => window.removeEventListener("mousemove", updatePos);
  }, [])
  return (
    <div 
    className="fixed pointer-events-none w-32 h-32 rounded-full border-2 border-white backdrop-invert"
    style={{
      left: position.x - 64,
      top: position.y - 64,
    }}
  />
  )
}
