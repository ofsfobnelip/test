import { NextPage } from 'next'
import React from 'react'
// type about_valid= {
//     text: string
// }
const About: NextPage<{ text: string}> = (props) => {
    return <>
        <div className='text-red-900 text-xl hover:font-semibold font-medium'>About {props.text}</div>
    </>
}
export default About