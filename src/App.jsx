import { useEffect, useState } from 'react'
import logo from "/images/logo.svg"
import GeneralWrapper from './components/GeneralWrapper/GeneralWrapper'
const initial_values = {
  bill: 0,
  tip: 0,
  people: '',
}

const initial_total_values = {
  total_tip: 0,
  total_amount: 0,
}

export default function App() {
  const [data, setData] = useState(initial_values)
  const [totals, setTotals] = useState(initial_total_values)

  const reset = () => {
    setData(initial_values)
    setTotals(initial_total_values)
  }

  useEffect(() => {
    const { bill, tip, people } = data
    const billFloat = parseFloat(bill) || 0
    const tipFloat = parseFloat(tip) || 0
    const peopleInt = parseInt(people) || 1

    if (billFloat > 0 && tipFloat > 0 && peopleInt > 0) {
      let total_amount = (billFloat * (tipFloat / 100) + billFloat) / peopleInt;
      let total_tip = (billFloat * (tipFloat / 100)) / peopleInt

      setTotals({ total_amount: total_amount, total_tip: total_tip })
    }else{
      setTotals(initial_total_values);
    }
  }, [data])
  return (
    <>
      <header><img src={logo} alt="Logo" /></header>
      <GeneralWrapper setData={setData} data={data} reset={reset} totals={totals} />
    </>
  )
}
