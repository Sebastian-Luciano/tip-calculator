import React from 'react'
import ResultTxt from './ResultTxt'

export default function ResultWrapper({reset, totals}) {
    
    return (
        <div className="result-wrapper">
            <ResultTxt totals={totals}/>
            <button onClick={reset} type="button" id="reset-button" className="reset-button">RESET</button>
        </div>
    )
}
