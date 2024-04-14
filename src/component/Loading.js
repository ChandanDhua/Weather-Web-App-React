import React from 'react'
import "./Loading.css"

const Loading = () => {
  return (
    <div className='text-[1.3rem] flex flex-col justify-center items-center gap-1 mt-[2rem]'>
        <div className='spinner'></div>
        <p className='text-[#9195F6]'>Loading...</p>
    </div>
  )
}

export default Loading