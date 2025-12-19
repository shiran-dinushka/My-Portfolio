import React from 'react'

export default function Header() {
  const navLinkStyle = "text-center text-base font-semibold text-black hover:text-blue-600"
  return (
    <>
        <header className="top-0 z-50 ">
          <div className="w-full flex items-center justify-between mx-auto bg-white border-b border-gray-200 h-15 ">
            <div className="w-lg flex items-center justify-center">
              <a href="#" className={navLinkStyle}>
                <span className="">Shiran Dinushka</span>
              </a>
            </div>
            
            <nav className="w-5xl flex justify-center ">
              <ul className="flex space-between gap-10 ">
                <li>
                  <a href="#" className={navLinkStyle}>Home</a>
                </li>
                <li>
                  <a href="#" className={navLinkStyle}>About</a>
                </li>
                 <li>
                  <a href="#" className={navLinkStyle}>Skills</a>
                </li>
                <li>
                  <a href="#" className={navLinkStyle}>Projects</a>
                </li>
                <li>
                  <a href="#" className={navLinkStyle}>Contact</a>
                </li>
              </ul>
            </nav>
           </div>
        </header>
    </>
  )
}
