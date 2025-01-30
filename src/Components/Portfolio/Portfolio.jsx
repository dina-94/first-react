import React from 'react'


export default function Portfolio() {
  return (
    <>
  <div className="container min-h-screen flex flex-col mt-28 mb-5">
<div className="text-center text-[#2c3e50] font-bold text-4xl mt-5">PORTFOLIO COMPONENT</div>

<div className='text-center justify-center items-center flex flex-row mb-10'>
  <div className="w-20 h-1 bg-[#2c3e50] mt-5 "></div>
  <div className="w-16 h-1 bg-white"> <i className='fa-solid fa-star'></i></div>
  <div className="w-20 h-1 bg-[#2c3e50] mt-5"></div>
  </div>

  

<div className="row flex flex-row px-9 gap-12 w-11/12 justify-center items-center mx-auto mb-12 ">
 <div className="flex-1"><img src="./images/poert1.png" alt="" className='rounded-lg'/></div> 
 <div className="flex-1"><img src="./images/port2.png" alt="" className='rounded-lg'/></div> 
 <div className="flex-1"><img src="./images/port3.png" alt="" className='rounded-lg'/></div> 
</div>
<div className="row flex flex-row  px-9 gap-12 w-11/12 justify-center items-center mx-auto mb-0 pb-0 ">
 <div className="flex-1"><img src="./images/poert1.png" alt="" className='rounded-lg'/></div> 
 <div className="flex-1"><img src="./images/port2.png" alt="" className='rounded-lg'/></div> 
 <div className="flex-1"><img src="./images/port3.png" alt="" className='rounded-lg'/></div> 
</div>








  </div>
 </> )
}
