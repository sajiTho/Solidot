import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import About from '../components/About'
import { NextPage } from 'next'
import Navbar from '../components/Navbar'
const index: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default index
