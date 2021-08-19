import React, { useState } from 'react'


export default function Cards({title, text, colour}) {
    const [color] = useState(colour)
    return (
        <div className="bg-gray-200 flex text-black mt-3 p-2 rounded">
            <span className={"text-white px-7 py-2 font-bold "+color}>{title}</span>
            <span className="text-center px-3 py-2 font-mono">{text}</span>
        </div>
    )
}
