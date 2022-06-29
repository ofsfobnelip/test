import type { NextPage } from 'next'
import styles from '../styles/main.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react'
const Home: NextPage = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Head>
        <title>Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="t" className={`${styles.lipi} p-2`}>
        Lipi Lekhika using Tailwind CSS
      </div>
      <div className='my-8 mx-4'>
        <button className='cursor-default text-2xl rounded-xl p-2 font-semibold border-2 border-black text-[red] active:text-[blue] focus:text-[orangered] focus:outline-none focus:ring focus:ring-violet-500'>Test</button>
      </div>
      <div>
        <Link href='/app' passHref={true}><a className='underline cursor-pointer text-blue-800 hover:text-red-700 text-2xl'>App</a></Link>
      </div>
      <div className='space-x-2 mt-2 border-2 border-black rounded-2xl inline-block p-2'>
        <Button variant="text">Text</Button>
        <Button variant="contained" className='text-black hover:text-white'>Text1</Button>
        <Button variant="outlined" className='text-black hover:text-green-600'>Text2</Button>
      </div>
      <div className="mt-3 p-2">
        <TextField label="Example" variant="outlined" />
      </div>
      <div className='m-2'>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div className='m-2'>
        <Switch defaultChecked />
        <Switch />
      </div>
      <div className="m-2">
        <TextField className='w-56 h-5 mb-5' multiline label="Textarea" variant="outlined" />
      </div>
    </>
  )
}

export default Home
