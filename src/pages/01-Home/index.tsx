import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Banner } from './02-Banner'
import { About } from './04-About'
import { Join } from './05-Join'
import { Team } from './06-Team'
import { GlobalStyles } from '../../styles/GlobalStyles'

export function Home() {
  return (
    <>
      <Banner />
      <About />
      <Join />
      <Team />
    </>
  )
}
