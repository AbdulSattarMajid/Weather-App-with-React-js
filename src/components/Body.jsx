import React from 'react'
import '../App.css'
export const Body = (props) => {
  const empty = props.empty;
  const errorMessage = props.errorMessage;
  const cityName = props.cityName;
  const celsiusHeading = props.celsiusHeading;
  const flag = props.flag;
  const celsiusTemp = props.celsiusTemp;
  const fahrenheitHeading = props.fahrenheitHeading;
  const fahrenheitTemp = props.fahrenheitTemp;
 
  return (
    <>
      {empty && <p className='empty'>Please Write Something Before You Enter</p>}
      <h1 className='error'>{errorMessage}</h1>
      <h1 className='City'>{cityName}</h1>
      <h3 className='Celsius'>{celsiusHeading}</h3>
      {flag && <div class="lds-ring"><div></div><div></div><div></div><div></div></div>}
      <p id='one'>{celsiusTemp}</p>
      <h3 className='Fahrenheit'>{fahrenheitHeading}</h3>
      <p id='two'>{fahrenheitTemp}</p>
    </>

  )
}
