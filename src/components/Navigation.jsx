import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({ base }) {
    return (
        <nav>
            <ul className="flex bg-white text-center py-2 shadow-md">
                <li className="flex-1"><Link to='basic'>INPUT</Link></li>
                <li className="flex-1"><Link to='basic/report'>REPORT</Link></li>
                <li className="flex-1"><Link to='basic/graph'>GRAPH</Link></li>
                <li className="flex-1"><Link to='basic/save'>SAVE</Link></li>
            </ul>
        </nav>
    )
}
