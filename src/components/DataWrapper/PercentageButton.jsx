import React, { useState } from 'react'

export default function PercentageButton({setData, data}) {
    const tip_values = [5, 10, 15, 25, 50]

const handleTip = (e) => {
  let target = e.target;
  if(target.tagName === 'BUTTON'){
    const tipValue = parseFloat(target.value)
    setData({...data, tip: tipValue})
  }
}

const handleCustomTip = (e) => {
    const value = e.target.value
    if(value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 100)){
        setData({...data, tip: value === '' ? 0 : parseFloat(value)})
    }
}
  

    return (
        <ul onClick={handleTip}>
            {
                 tip_values.map(value =>
                    <li key={value} id="percentage-${value}"><button type="button" className={`percentage-button ${data.tip === value ? 'active' : ''}`} value={value}>{value}%</button></li>
                )
            }
           
            <li><input onChange={handleCustomTip} type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button" value={!tip_values.includes(data.tip) ? data.tip || '' : ''} min="0" max="100"/></li>
        </ul>
    )
}
