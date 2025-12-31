import React from 'react'

export default function ({title}) {
  return (
    <div className="w-full text-center">
         <div className="text-4xl font-bold text-center py-4 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
               bg-clip-text text-transparent inline-block ">
          {title}
           <span className="block mx-auto mt-2 h-2 w-16  bg-indigo-500 rounded"></span>
        </div>
    </div>
  )
}
