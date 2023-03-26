import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css'

function App(){
  function getRandomAnimal(){
    const animals = ['bird','cat','cow','dog','gator','horse'];
    return animals[Math.floor(Math.random()*animals.length)];
  }
  

 let [animal,setAnimal] = useState([]);

 const renderedAnimal = animal.map((animal,index)=>{
  return <AnimalShow type= {animal} key= {index} />
})
  
  return (<div>
     <button onClick={()=>{setAnimal([...animal,getRandomAnimal()])}}>
        Click Me
    </button>    
    <div>{renderedAnimal}</div>
  </div>);
}

export default App;