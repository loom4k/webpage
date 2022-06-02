import type { NextPage } from 'next'

import { Navbar } from '@components/Layout/Navbar'
import { Hero } from '@components/Home/Hero'
import { About } from '@components/Home/About'
import { Stack } from '@components/Stack'
import Changelog from '@components/Changelog'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
      <Stack />

      <Changelog commits />
    </>
  )
}

export default Home
