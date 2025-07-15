import React from 'react'
import { navLinks } from '../../contants'

const Navbar = () => {


  return (
    <header>
      <nav>
        <div className="logo">
          Velvet Pour
        </div>
        <div className="links">
          {
            navLinks.map(link => {
              return (
                <ul>
                  <li key={link.id} >
                    <a target='blank' href={`#${link.id}`}>{link.title}</a>
                  </li>
                </ul>

              )
            })
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar