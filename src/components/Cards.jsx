import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BasicHeader from '../components/header'

function Cards({title, text, colour, link}) {
    const [color] = useState(colour)
    return (
        <Link to={link}>
            <div className="bg-gray-200 flex text-black mt-3 p-2 rounded">
                <span className={"text-white px-7 py-2 font-bold "+color}>{title}</span>
                <span className="text-center px-3 py-2 font-mono">{text}</span>
            </div>
        </Link>
    )
}

function BasicLoanCard({ setOption }){
    return (
        <section className="m-5 rounded-xl shadow-md">
            <BasicHeader title="EMI - Basic" />
            <div className="mx-auto p-2">
                <span className="text-pink-500">Calculate </span>
                <select className="bg-white" onChange={(e) => setOption(e.target.value)}>
                    <option value='Monthly Replayment (EMI)'>Monthly Replayment (EMI)</option>
                    <option value='Loan Amount'>Loan Amount</option>
                    <option value='Annual Interest Rate (%)'>Annual Interest Rate (%)</option>
                    <option value='Loan Term'>Loan Term</option>
                </select>
            </div>
        </section>
    )
}

function BasicLoanCalculator({ title, setCalculateObj }){
    const [amount, setAmount] = useState(0)
    const [rate, setRate] = useState(5)
    const [term, setTerm] = useState(5)
    const [termDuration, setTermDuration] = useState('year')

    const handleBasicCalculate = () => {
        setCalculateObj({
            type: title,
            loan_amount: amount,
            interest_rate: rate,
            loan_term: term,
            loan_duration: termDuration
        })
        console.log('Working')
    }
    return (
        <section className="m-5 rounded-xl shadow-md">
            <BasicHeader title={ title } />
            <div className="flex flex-col mx-auto px-5 py-2">
                <label htmlFor="loanAmount">Loan Amount</label>
                <input type="number" placeholder="Rs." id='loanAmount' className="form-input p-1" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <hr />
                <label htmlFor="annualRate">Annual Intrest Rate (%)</label>
                <input type="number" placeholder="%" id='annualRate' className="form-input p-1" value={rate} onChange={(e) => setRate(e.target.value)} />
                <hr />
                <label htmlFor="loanTerm">Loan Term</label>
                <div className="flex">
                    <input type="number" placeholder="" id='loanTerm' className="form-input p-1" value={term} onChange={(e) => setTerm(e.target.value)} />
                    <select className="form-select text-xl" value={termDuration} onChange={(e) => setTermDuration(e.target.value)}>
                        <option value="years">Years</option>
                        <option value="months">Months</option>
                    </select>
                </div>
                <hr />
                <div className="flex justify-around mt-3">
                    <button className="bg-green-600 px-3 py-2 rounded-lg text-white font-bold" onClick={(e) => setCalculateObj()}>RESET</button>
                    <button className="bg-blue-600 px-3 py-2 rounded-lg text-white font-bold" onClick={handleBasicCalculate}>CALCULATE</button>
                </div>
   
            </div>
            
        </section>
    )
}

function ReportCard() {
    return <h1>Report CArd</h1>
}

export default Cards;
export {
    BasicLoanCard,
    BasicLoanCalculator,
    ReportCard
}