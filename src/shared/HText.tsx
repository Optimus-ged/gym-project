import React from 'react'

type Props = {
    children : React.ReactNode;
}

const HText = ({children}: Props) => {
  return (
    <h1 className="font-bold text-3xl font-montserrat basis-3/5">{children}</h1>
  )
}

export default HText