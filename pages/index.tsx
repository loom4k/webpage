import type { NextPage } from 'next'
import { Hero } from '../components/Home/Hero'
import { Navbar } from '../components/Layout/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default Home
