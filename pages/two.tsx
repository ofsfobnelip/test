import Test from '../components/Test'
import Link from 'next/link'
export default function Page(props:any) {
  return <Test text="two">
  <Link href="/one">
    <a className='m-1 underline text-blue-800'>one</a>
  </Link>
</Test>
}