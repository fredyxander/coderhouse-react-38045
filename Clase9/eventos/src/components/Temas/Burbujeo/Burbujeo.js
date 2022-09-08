import React from 'react'
import { useState } from 'react'
import './Burbujeo.css';

export const Burbujeo = () => {
    const [openModal, setOpenModal] = useState(false);

    const showModal = ()=>{
        setOpenModal(!openModal)
    }

    const detenePropagacion = (event)=>{
        event.stopPropagation()
    }

    return (
        <div>
            <button onClick={showModal}>abril modal</button>
            {
                openModal ?
                <div className='background-modal' onClick={showModal}>
                    <div>
                        <div className='modal' onClick={detenePropagacion}>
                            modal
                            <button onClick={showModal}>cerrar</button>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}
