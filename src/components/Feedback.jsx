import React from 'react'
import Cards from './Cards'


export default function Feedback() {
    return (
        <div>
            <h1 className="bg-blue-600 text-center font-bold py-3 text-xl rounded">FEEDBACK</h1>
            <Cards title="Share" text="Tell Your Friends" colour="bg-blue-600" />
        </div>
    )
}
