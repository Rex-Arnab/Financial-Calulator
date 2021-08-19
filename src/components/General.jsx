import React from 'react'
import Cards from './Cards'

export default function General() {
    return (
        <div>
            <h1 className="bg-yellow-600 text-center font-bold py-3 text-xl rounded">GENERAL</h1>
            <Cards title="SI" text="Simple Interest" colour="bg-yellow-600" />        
            <Cards title="CI" text="Compound Interest" colour="bg-yellow-600"/>        
        </div>
    )
}
