import { NextPage } from 'next'
import React from 'react'
import { useState } from 'react'
const About: NextPage = () => {
    const [count, setCount] = useState(0);
    return <div>
        <h1>Page: k</h1>
        <p>Count: {count}</p>
        <button className='border-2 border-red-800 p-1 rounded' onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
}
export default About