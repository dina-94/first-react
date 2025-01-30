import React from 'react'

export default function Footer() {
  return (

    <>

    <div className=' bg-[#2c3e50] items-center justify-center pt-6'>
  
       <div className="row  p-12 flex flex-col lg:flex-row md:flex-col item-center justify-between  gap-2 m-6">
     
        <div className="flex-1 mb-3 lg:mb-0 pt-2">
     <div className="item1 w-11/12 text-center"> 
      <h2 className='text-white fa-2xl p-2'>LOCATION</h2>
     <h2 className='text-white mt-4 mb-4'>2215 John Daniel Drive</h2>
     <h2 className='text-white p-2'>Clark, MO 65243</h2></div>
     
        </div>

        <div className="flex-1  mb-3 lg:mb-0 pt-2">
        <div className="item2 w-11/12 text-center"> 
     <h2 className='text-white fa-2xl p-2'>AROUND THE WEB</h2>

<div className="row p-6 flex items-center mx-auto justify-between w-8/12 gap-1 lg:w-6/12 md:w-4/12 ">
<div className='flex-1 rounded-full border border-white w-9 h-9 flex items-center justify-center '><i className="fa-brands fa-facebook text-white" /></div>
<div className='flex-1  rounded-full border border-white  w-9 h-9 flex items-center justify-center'><i className="fa-brands fa-twitter text-white" /></div>
<div className='flex-1  rounded-full border border-white  w-9 h-9 flex items-center justify-center'><i className="fa-brands fa-linkedin-in text-white" /></div>
<div className='flex-1  rounded-full border border-white  w-9 h-9 flex items-center justify-center'><i className="fa-solid fa-globe text-white" /></div>
</div>
  </div>

        </div>


        <div className="flex-1  mb-3 lg:mb-0 pt-2">
        <div className="item3 w-12/12 text-center lg:w/11/12 md:w-12/12"> 
     <h2 className='text-white fa-2xl p-3'>ABOUT FREELANCER</h2>
     <h2 className='text-white p-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</h2>
  

        </div>
        </div>
</div>


        <div className="row items-center justify-between p-6 bg-[#1a252f] w-full text-center">
<h2 className='text-white'>Copyright © Your Website 2021</h2>
        </div>

    

      

    </div>

 </> )
}
