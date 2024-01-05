import React from 'react'

const Footer = () => {
  return (
    <div  className=' h-[60vh] w-full border-2 border-yellow-400  flex flex-col items-center'>


      <div className="top  h-[60%] w-[100%] bg-purple-300  flex">
        <div className="left  h-[100%] w-[20%] bg-green-300 flex items-center justify-center">
        <h1 className=" font-serif font-bold text-3xl pl-3">Skillex.</h1>

      </div>

        <div className="center  h-[100%] w-[40%] bg-orange-300 flex flex-col  items-center justify-end">
          <div className="top h-[40%] w-[100%] bg-yellow-600 flex items-center justify-center">
          <ul className="flex items-center gap-12 text-lg">
            <li>Find passion</li>
            <li>Categories</li>
          </ul>
          </div>
          <div className="top h-[30%] w-[100%] bg-green-600  flex items-center justify-center">
          <ul className="flex items-center gap-[115px] text-lg">
          <li>Skill</li>
            <li>Customer</li>
          </ul>
          </div>
        </div>
        <div className="right  h-[100%] w-[40%] bg-blue-300 flex  flex-col justify-end gap-4">

        <div className="top h-[40%] w-[100%] bg-yellow-600 flex items-center  pl-20">
        <h1 className=" h1  font-medium text-2xl pt-6">Join our community</h1>

        
  
        </div> 

        <div className="form h-[30%] w-[70%] bg-slate-400 left-20  bottom-[12%] flex items-center ml-20">
              <input
                type="text"
                placeholder="Find Your Passion"
                className="  h-[100%] w-[80%] text-center  text-lg border border-slate-700 outline-green-300 "
              />

              <button className="h-[100%] w-[20%] bg-green-200  m-[.5px] text-xl font-medium hover:bg-orange-300 ">
                GO
              </button>
            </div>

        </div>
      </div>


      <div className="middle-line h-[2px] w-[90%] bg-slate-600 mt-2"></div>



      <div className="bottom  h-[39%] w-[100%] bg-red-300 flex ">

       <div className="left h-[100%] w-[65%] bg-sky-300  flex items-center pl-[70px] gap-6">
        <div className="imgbox h-[40px] w-[40px] bg-black rounded-full">
          <img className='h-full w-full object-cover' src="https://assets.website-files.com/617fa48948c7ab24b715140e/619f7e9a1cc6db8ecfc33794_logo-copyright.svg" alt="" />
        </div>
        <h1 className='text-xl font-medium'>2023 Halo Lab. All rights reserved</h1>
       </div>


       <div className="right   h-[100%] w-[35%] bg-green-300  flex items-center justify-center gap-4 pl-6">
        <div className="imgbox-fb   h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center  border-[1px] border-black hover:bg-green-300">
        <img className='h-[30px]  object-cover' src="https://assets.website-files.com/617fa48948c7ab24b715140e/618ebffa14d2842923cf72ce_ico_soc-fb.svg" alt="" />
        </div>
        <div className="imgbox-Be   h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center  border-[1px] border-black hover:bg-green-300">
        <img className='h-[30px] object-cover' src="https://assets.website-files.com/617fa48948c7ab24b715140e/618ebffbf8bc3224d3d5178d_ico_soc-behance.svg" alt="" />
        </div>
        <div className="imgbox-in   h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center  border-[1px] border-black hover:bg-green-300">
        <img className='h-[30px] object-cover' src="https://assets.website-files.com/617fa48948c7ab24b715140e/618ebffb14d284f5accf72cf_ico_soc-in.svg" alt="" />
        </div>
        <div className="imgbox-insta   h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center  border-[1px] border-black hover:bg-green-300">
        <img className='h-[30px] object-cover' src="https://assets.website-files.com/617fa48948c7ab24b715140e/618ec00349dffaacd6f2fdf1_ico_soc-inst.svg" alt="" />
        </div>
        <div className="imgbox-dribble   h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center  border-[1px] border-black hover:bg-green-300">
        <img className='h-[30px] object-cover' src="https://assets.website-files.com/617fa48948c7ab24b715140e/618ebffa2d06733e48015aa2_ico_soc-dribbble.svg" alt="" />
        </div>
       </div>
        



      </div>

      
     
      
      
      </div>
  )
}

export default Footer