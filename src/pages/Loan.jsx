import React, { useState } from 'react'
import { BasicLoanCalculator, BasicLoanCard, ReportCard } from '../components/Cards'

import Navigation from '../components/Navigation'

function Header({title}){
    return (
        <div className="bg-purple-600 p-3 text-white font-bold">
            <header>{title}</header>
        </div>
    )
}

export default function BasicLoan() {
    const [option, setOption] = useState('Monthly Replayment (EMI)')
    const [calculateObj, setCalculateObj] = useState()

    return (
        <div>
            <Header title="Loan - Basic"></Header>
            <Navigation base="basic" />
            <BasicLoanCard setOption={setOption} />
            <BasicLoanCalculator title={option} setCalculateObj={setCalculateObj}/>
            {calculateObj && <ReportCard />}
        </div>
    )
}
