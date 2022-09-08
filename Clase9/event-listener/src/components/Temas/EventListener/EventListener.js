import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const EventListener = () => {
    const [isMobile, setIsMobile] = useState(false);

    const hacerClick = (event)=>{
        console.log("click", event)
        console.log(event.nativeEvent)
    }

    const cambiarFn = ()=>{
        console.log("el texto cambio")
    }

    useEffect(()=>{
        window.addEventListener("click", hacerClick);
        return ()=>{
            console.log("event listener desmontado")
            window.removeEventListener("click", hacerClick);
        }
    },[])

    const checkResolution = ()=>{
        if(window.innerWidth <300){
            setIsMobile(true)
        } else{
            setIsMobile(false)
        }
        // console.log(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("load", checkResolution);
        return ()=>{
            console.log("event listener desmontado")
            window.removeEventListener("load", checkResolution);
        }
    },[])

    return (
        <div>
            <p>EventListener</p>
            <button onClick={hacerClick}>hacer click</button>
            <input onChange={cambiarFn} placeholder='email'/>
            {
                isMobile ?
                <p>estas en mobile</p>
                :
                <p>Esats desde un computador</p>
            }
        </div>
    )
}
