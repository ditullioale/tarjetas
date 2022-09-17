import React from 'react'


function Tarjetas() {
    return (
        <div className= "Ncard">
            <img
            className='imagen-ihpone'
            src={require('../imagenes/iphone-13-pro.png')}
            alt='imagen iphone13'/>
            <p className ='new'> New </p>
            <p className = "modelo"> Iphone 13 pro</p>
            <p className = 'descripcion'> The ultimate iphone</p>


            
        </div>
        
);
}

export default Tarjetas;