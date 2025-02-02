import React from 'react'

export const Button = ({children, ...props}) => {
  return (
    <button 
    {...props}
    className='bg-secondary rounded-xl text-primary p-4 '>
      {children}
    </button>
  )
}
