import Test from '../components/Test'
import Link from 'next/link'
export default function Page(props: any) {
  return <>
    <Test/>
    <Lpi/>
  </>
}

function Lpi() {
  return <>
    <Link href="/one">
      <a className='m-1 underline text-blue-800'>one</a>
    </Link>
    <Link href="/two">
      <a className='m-1 underline text-blue-800'>two</a>
    </Link>
  </>
}
