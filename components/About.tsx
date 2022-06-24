import { NextPage } from 'next'
import React from 'react'
type about_valid= {
    text: string
}
const About: NextPage<about_valid> = (pros) => {
    return (
        <div className='text-red-900 hover:text-4xl'>About {pros.text}</div>
    )
}
export default About