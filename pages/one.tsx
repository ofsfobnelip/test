import Test from '../components/Test'
import Link from 'next/link'
export default function Page(props: any) {
  return <Test text="one">
    <Link href="/two">
      <a className='m-1 underline text-blue-800'>two</a>
    </Link>
  </Test>
}