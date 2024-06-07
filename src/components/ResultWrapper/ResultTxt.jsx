import React from 'react'

export default function ResultTxt({totals}) {
    const formatNumber = (num) => {
        return (parseFloat(num) || 0).toFixed(2)
    }

    return (
        <div className="result-txt">
            <div className="text-amount">
                <div>
                    <h2>Tip Amount</h2>
                    <p>/ person</p>
                </div>
                <h3>$<span id="tip-amount">{formatNumber(totals.total_tip)}</span></h3>
            </div>
            <div className="total-amount">
                <div>
                    <h2>Total</h2>
                    <p>/ person</p>
                </div>
                <h3>$<span id="total">{formatNumber(totals.total_amount)}</span></h3>
            </div>
        </div>
    )
}
