import React from 'react'
import DataWrapper from '../DataWrapper/DataWrapper'
import ResultWrapper from '../ResultWrapper/ResultWrapper'

export default function GeneralWrapper({ setData, data, reset, totals }) {
    return (
        <div className="general-wrapper">
            <DataWrapper setData={setData} data={data} />
            <ResultWrapper reset={reset} totals={totals} />
        </div>
    )
}
