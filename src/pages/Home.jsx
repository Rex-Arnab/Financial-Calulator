import React from 'react'
import Bank from '../components/Bank'
import Feedback from '../components/Feedback'
import General from '../components/General'
import Header from '../components/Header'


export default function Home() {
    return (
        <>
        <Header />
        <div className="h-max App p-3 text-white bg-gray-400 flex flex-col space-y-2 md:w-5/12 md:mx-auto md:mt-5">
            <Bank />
            <General />
            <Feedback />
        </div>
        </>
    )
}
