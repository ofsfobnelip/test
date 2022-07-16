import type { NextPage } from 'next'
import React, { useState } from 'react'

const contacts = ["𑀮𑀓𑁆𑀱𑁆𑀫𑀡𑀂"];

const Home: NextPage = () => {
  return <ContactManager data={contacts} />
}
function ContactManager(props: any) {
  const [contacts, setContacts] = useState(props.data);
  function addPerson(name: string) {
    setContacts([...contacts, name]);
  }
  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
function AddPersonForm(props: any) {
  const [person, setPerson] = useState('');
  function handleChange(e: any) {
    setPerson(e.target.value);
  }
  function handleSubmit(e: any) {
    if (person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form className='m-2' onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
        className='border-2 rounded border-black p-1 text-green-800 outline-none focus:border-blue-800 focus:shadow-lg focus:shadow-orange-200' />
      <button type="submit" className='m-2 border-blue-800 bg-yellow-200 border-2 p-1 rounded font-semibold'>Add</button>
    </form>
  );
}
function PeopleList(props: any) {
  const arr = props.data;
  const listItems = arr.map((val: string, index: number) =>
    <li className='list-none p-2 m-2 rounded-lg bg-blue-200 font-semibold' key={index}>{val}</li>
  );
  return <ul className='mt-2 p-0'>{listItems}</ul>
}

export default Home