import { NextPage } from 'next'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
const About: NextPage<{ text: string }> = (props) => {
    const dispatch = useDispatch()
    const actions = bindActionCreators(actionCreators, dispatch)
    const { Withdaraw, Deplosit, ChangeName } = actions
    const [val, change_val] = useState("")
    return <>
        <div className='text-red-900 text-xl font-medium'>About {props.text}</div>
        <div>
            <button className="text-xl text-red-700 px-1 m-1 rounded bg-yellow-200" onClick={() => Withdaraw(100)}>-</button>
            Update
            <button className="text-xl text-red-700 px-1 m-1 rounded bg-yellow-200" onClick={() => Deplosit(100)}>+</button>
            <input type="text" className='border-2 mx-2 my-1 p-1 outline-none rounded bg-slate-300 border-black font-semibold' value={val} onChange={(e) => {
                change_val(e.target.value)
                ChangeName(e.target.value)
            }} />
        </div>
    </>
}
export default About