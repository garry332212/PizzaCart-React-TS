import React from 'react';
import pizzas from "./data/pizzaData.json"
import Pizza from './components/Pizza';
import Styles from "../src/App.module.css";

function App() {
  return (
    <>
  
    <div className={Styles.container}>
      <ul >
        {pizzas.map((food )=>{
         
          return <Pizza key={food.id} menu = {food} /> 
         
        })}
      </ul>
    </div>

    </>
  );
}

export default App;
