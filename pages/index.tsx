import type { NextPage } from 'next'

import { Navbar } from '@components/Layout/Navbar'
import { Hero } from '@components/Home/Hero'
import { About } from '@components/Home/About'
import { Stack } from '@components/Stack'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
      <Stack />
    </>
  )
}

export default Home
