import React from 'react'

export default function({description}) {
  return (
    <div className="mx-auto ">
        <p className="text sm lg:text-lg text-center my-2">
          {description}
        </p>
    </div>
  )
}
