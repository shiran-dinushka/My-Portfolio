import React from 'react'
import Introduction from './Introduction'
import MyImage from './MyImage'
import Scrolldown from "../assets/scroll-down.gif";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-10">
      <div className="flex space-x-10 items-center">
        <Introduction />
        <MyImage />
       </div>
       <div className="mt-8">
        <img src={Scrolldown} alt="Down Arrow" className="w-10 h-10 mx-auto mt-2 animate-bounce"/>
       </div>
    </div>
   
  )
}
