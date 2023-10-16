import { Link } from "react-router-dom"

export default function ErrorPage() {
  return <div className='flex flex-col items-center mt-10'>
    <h2 className='font-bold text-2xl'>Oops! Something went wrong</h2>
    <div>
    Head back to the <Link to='/' className='text-cyan-400'>home page</Link>.
    </div>
  </div>
}