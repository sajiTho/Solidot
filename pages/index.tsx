import React, { createContext, useContext, useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

export interface ForMenuState {
  MenuState: boolean;
  setMenuState: (e: boolean) => void;
}

export const SetMenuState = createContext<ForMenuState>({
  MenuState: false,
  setMenuState: () => { }
})

const index = () => {
  let [MenuState, setMenuState] = useState<boolean>(false)
  return (
    <div>
      <SetMenuState.Provider value={{ MenuState, setMenuState }}>
        <Hero />
      </SetMenuState.Provider>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      {
        MenuState &&
        <SetMenuState.Provider value={{ MenuState, setMenuState}}>
          <Menu />
        </SetMenuState.Provider>
      }
    </div>
  )
}

export default index
