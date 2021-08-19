import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

function Card(){
    return <h1>Simple Card</h1>;
}

export default Cards;
export {
    Card
}