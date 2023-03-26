import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';
import { useState } from 'react';
import './AnimalShow.css'



const svgMap = {
    bird,
    cat,
    horse,
    gator,
    dog,
    cow
}
function AnimalShow({type}){
    let [click,setClick] = useState(0);
    const handleClick = ()=>{setClick(click+1)};
    return <div onClick={handleClick}>
        <img alt="animal" src = {svgMap[type]}/>
        <img alt= "heart" src = {heart} style={{width: 10 + 10 * click}}/>
    </div>;
}

export default AnimalShow;