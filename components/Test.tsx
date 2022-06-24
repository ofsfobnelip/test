import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
const About: NextPage<{ text: string, children:React.ReactElement }> = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Page: one</h1>
            <p>Count: {count}</p>
            <button className='border-2 border-red-800 p-1 rounded' onClick={() => setCount(count + 1)}>Increase count</button>
            {props.children}
        </div>
    )
}
export default About