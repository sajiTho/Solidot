import React, { createContext, useState } from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import About from '../components/About'
import { NextPage } from 'next'
import Navbar from '../components/Navbar'

export interface ForMenuState {
  MenuState: boolean;
  setMenuState: (e: boolean) => void;
}

export const SetMenuState = createContext<ForMenuState>({
  MenuState: false,
  setMenuState: () => { }
})

const index: NextPage = () => {
  let [MenuState, setMenuState] = useState<boolean>(false)
  return (
    <>
      <Navbar />
      <SetMenuState.Provider value={{ MenuState, setMenuState }}>
        <Hero />
      </SetMenuState.Provider>
      <About />
      <Portfolio />
      {/* <Contact />
      <Footer />
      {
        MenuState &&
        <SetMenuState.Provider value={{ MenuState, setMenuState}}>
          <Menu />
        </SetMenuState.Provider>
      } */}
    </>
  )
}

export default index
