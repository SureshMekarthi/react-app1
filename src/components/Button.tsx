import React from 'react'

interface Props{
    children: string;
    color :string;
    onClick:()=>void;
}

function Button({children, color, onClick}:Props) {
  return (
    <>
    <button type="button" className={"btn btn-"+ color} onClick={onClick}>{children}</button>
    </>
  )
}

export default Button