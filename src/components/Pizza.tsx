import React from 'react';
import StylePizza from "./Pizza.module.css"
//1. Pizza Object With Types

interface Piza {
  id: number,
  name: string,
  description: string,
  amount: number,
}
  //2. Interface to describe the props
  interface Props {
    menu: Piza
  }

const Pizza: React.FC<Props> = ({menu}) => {
  return (
   <>
   
  <li className={StylePizza.container}>
    <h2>{menu.name}</h2>
    <p>{menu.description}</p>
    <h2>{menu.amount}</h2>
  </li>
   
   </>
  )
}

export default Pizza