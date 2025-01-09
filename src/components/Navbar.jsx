import React from 'react'

function Navbar() {
  return (
    <div className="fixed z-[900] w-full px-20 py-8  flex justify-between items-center bg-zinc-900">
      <div className="logo">
        <h1 className='text-6xl font-semibold uppercase flex justify-between items-center bg-orange-700'>Kaddu </h1>
      </div>

      <div className='links flex gap-10' >
        {["Sevices","Our Work","About us","Insights", "Contact"].map((item, index) => ( 
          <a key={index} className={`text-lg capitalize font-semibold ${index === 4 && "ml-32"}`}>{item} </a>
          ))}

      </div>
      </div>
  )
}

export default Navbar
