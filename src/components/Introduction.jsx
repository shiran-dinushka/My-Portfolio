import React from 'react'

export default function Introduction() {
  return (
    <div className="p-5 w-3xl">
        <div className="p-2 text-6xl font-semibold">Hi, I'm Shiran Dinushka</div>
        <div className="text-3xl p-2 font-semibold mt-2">A Passionate Full Stack Developer</div>
          <div className="text-lg p-2 my-4">
            <p>
                I am a passionate and self-motivated
                recent graduate with a strong drive to
                learn new technologies in the IT field. I
                embrace challenges proactively and
                strive to achieve my targets. I am
                enthusiastic about applying my
                knowledge and skills to contribute to
                an organization's growth and success
                as a Full Stack Developer
            </p>
          </div>
          <div className="pr-2 mt-8">
            <button className="px-4 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-700 mr-5">
                Download Resume
            </button>
            <button className="font-semibold px-4 py-4 bg-green-500 text-white rounded-full hover:bg-green-700">
                Connect with Me
            </button>
          </div>
    </div>
  )
}
