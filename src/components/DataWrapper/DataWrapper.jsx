import React from 'react'
import PercentageButton from './PercentageButton'

export default function DataWrapper({setData, data}) {
    const handleBill = (e) => {
        const value = e.target.value
        setData({...data, bill: value === '' ? '' : value})
    }
  
    const handlePeople = (e) => {
        const value = e.target.value
        if(value === '' || parseInt(value) > 0) {
            setData({...data, people: value})
        }
    }

    return (
        <div className="data-wrapper">
            <h1>Bill</h1><label htmlFor="input-bill">
                <input onChange={handleBill} className="input-bill" id="input-bill" type="number" min="0" step="0.01" value={data.bill} placeholder='0' /></label>
            <h2>Select Tip %</h2>
            <PercentageButton setData={setData} data={data}/>
            <h2>Number of People</h2><label htmlFor="input-people">
                <input onChange={handlePeople} id="input-people" className="input-people" type="number" value={data.people} min="1" placeholder='1' />
            </label>
            {parseInt(data.people) <= 0 && <p className='error'>Can't be zero</p>}
        </div>
    )
}
