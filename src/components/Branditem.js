import React from 'react'

const Branditem = () => {
  const carData = [{
        logo:"images/icon-sedans.svg",
        brand:"Sedans",
        detail:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
    },
    {
        logo:"images/icon-suvs.svg",
        brand:"SUVs",
        detail:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."        
    },
    {
        logo:"images/icon-luxury.svg",
        brand:"Luxury",
        detail:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." 
}]
const carDataElement = carData.map((value,key) => {
    return(
        <div key={key} className={`container-box ${value.brand}`}>
         <div className='container-item'>
        <img src={value.logo} alt={value.brand} />
        </div>
        <div className='container-item'>
        <h1>{value.brand}</h1>
        </div>
        <div className='container-item'>
        <p>{value.detail}</p>
        </div>
        <div className='container-item'>
        <button>Learn More</button>
        </div>
    </div>
       
    );
})
  return (
    <>
    {carDataElement}
    </>
  )
}

export default Branditem