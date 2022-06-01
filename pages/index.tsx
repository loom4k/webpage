import type { NextPage } from 'next'

import { Navbar } from '@components/Layout/Navbar'
import { Hero } from '@components/Home/Hero'
import { About } from '@components/Home/About'
import Changelog from '@components/Changelog'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <About />

      <Changelog commits />
    </>
  )
}

export default Home
