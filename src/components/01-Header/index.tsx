import { useState } from "react";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

export function Header() {
  const [isOpen, setIsOpen ] = useState(false) 

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar  toggle={toggle} />
    </>
  )
}