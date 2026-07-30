import Navbar from './sections/navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <div className='bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
