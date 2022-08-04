import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Banner } from '../components/02-Banner'
import { About } from '../components/04-About'
import { Join } from '../components/05-Join'
import { Team } from '../components/06-Team'
import { GlobalStyles } from '../styles/GlobalStyles'

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
