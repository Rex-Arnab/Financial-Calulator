import React from 'react'
import Cards from './Cards'

export default function Bank() {
    return (
        <div>
            <h1 className="bg-purple-600 text-center font-bold py-3 text-xl rounded">Bank</h1>
            <Cards title="EMI" text="Loan - Basic" colour="bg-purple-800" link="/loan/basic" />        
            <Cards title="EMI" text="Loan - Advanced" colour="bg-purple-800" />        
        </div>
    )
}
