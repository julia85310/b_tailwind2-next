'use client'
import { useState } from "react"
const imagenes = [
    'https://i.imgur.com/dmsj2qC.jpeg',
    'https://i.imgur.com/SWrOkBE.jpeg',
    'https://i.imgur.com/TsYW8yE.jpeg'
]
export default function GaleriaPage(){
    const [index, setIndex] = useState(0);
    const [key, setKey] = useState(0); //para que se cargue la imagen y haga el efecto de aparecer al cambiar de img

    function anterior(){
        if (index == 0){
            setIndex(imagenes.length-1)
        }else{
            setIndex(index-1)
        }
        setKey(prevKey => prevKey + 1);
    }

    function siguiente(){
        if (index == imagenes.length-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
        setKey(prevKey => prevKey + 1);
    }

    return <div >
        <button onClick={anterior}>←</button>
        <img key={key} src={imagenes[index]} className="m-10 transition h-72 w-auto hover:scale-125 duration-500 animate-fade-in active:animate-rebotar"></img>
        <button onClick={siguiente}>→</button>
    </div>
}