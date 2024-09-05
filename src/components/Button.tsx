import React from 'react'

interface Props{
    children: string
}

function Button({children}:Props) {
  return (
    <>
    <button type="button" className='$"btn btn-primary"'>{children}</button>
    </>
  )
}

export default Button