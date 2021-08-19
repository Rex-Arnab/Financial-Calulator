import React from 'react'
import { Card } from '../components/Cards'

import Navigation from '../components/Navigation'

function Header({title}){
    return (
        <div className="bg-purple-600 p-3 text-white font-bold">
            <header>{title}</header>
        </div>
    )
}

export default function BasicLoan() {
    return (
        <div>
            <Header title="Loan - Basic"></Header>
            <Navigation />
            <Card />
        </div>
    )
}
