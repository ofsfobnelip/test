import { NextPage } from 'next'
import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
const About: NextPage<{ text: string }> = (props) => {
    const dispatch = useDispatch()
    const actions = bindActionCreators(actionCreators, dispatch)
    const { Withdaraw, Deplosit } = actions
    return <>
        <div className='text-red-900 text-xl font-medium'>About {props.text}</div>
        <div>
            <button className="text-xl text-red-700 px-1 m-1 rounded bg-yellow-200" onClick={() => Withdaraw(100)}>-</button>
            Update
            <button className="text-xl text-red-700 px-1 m-1 rounded bg-yellow-200" onClick={() => Deplosit(100)}>+</button>
        </div>
    </>
}
export default About