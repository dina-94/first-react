import React from 'react'
import port from "../../assets/avataaars (1).svg";




export default function Home() {
  return (

    <>



<div className="container min-h-screen flex flex-col mx-auto my-auto justify-center items-center bg-[#1abc9c]">

<div><img src={port} width={"250px"} alt="" className='rounded-lg'/></div> 

<div className="text-center text-white font-bold text-4xl mt-5">START FRAMEWORK</div>

<div className='text-center justify-center items-center flex flex-row mb-5'>
  <div className="w-20 h-1 bg-white mt-5 "></div>
  <div className="w-16 h-1"> <i className='fa-solid fa-star text-white'></i></div>
  <div className="w-20 h-1 bg-white mt-5"></div>
</div>

<div className=''>

<div className="flex-1 text-white"><h2>Graphic Artist - Web Designer - Illustrator</h2></div> 

</div>
</div>
 </> )
}
