import React from 'react'

const Tour = ({id, name, image, info, price}) => {
        return (<article className='single-tour'>
            <img src={image} alt={name} className='img' />
            <span className='tour-price'>${price}</span>
            <div className="tour-info">
            <h5>{name} </h5>
            <p> {info}</p>

            </div>
        </article>)
   }
//   return (
//     <div>
      
//     </div>
//   )


export default Tour
