import React from "react";

const Page3 = () => {
  return (
    <div className="page3 h-[120vh] w-full border-2 border-blue-500 relative">
      <div className="top h-[35vh] w-full bg-blue-100 flex justify-center gap-36 pr-12">
        <h1 className="text-[44px] font-medium  leading-[50px]">
          Get the skills you <br />
          need for a job that <br />
          is in demand.
        </h1>
        <p className=" text-2xl w-[45%] pt-2 ">
          The modern labor market dictates its own terms. Today, to be a
          competitive specialist requires more than professional skills.
        </p>

         <div className="green-content  absolute top-[21%]  right-40 h-[20vh] w-[40vw] bg-green-400 flex items-center">
          <div className="left h-[fit-content] w-[50%]   flex   gap-3   items-center   justify-center">
            <h1 className="text-6xl font-medium">10</h1>
            <p className="text-lg font-medium leading-[18px]">YEARS <br />EXPERIENCES</p>
          </div>
          <div className="right h-[fit-content] w-[50%]    flex   gap-3   items-center  justify-center   border-l-2   border-black">
            <h1 className="text-6xl font-medium">250</h1>
            <p className="text-lg font-medium leading-[18px]">TYPES OF <br />COURSES</p>
          </div>
         </div>



      </div>

      <div className="mid  h-[75vh] w-full bg-blue-400 flex  gap-3 items-center ">
        <div className="left  h-[100%] w-[30vw] bg-pink-200 flex flex-col items-end justify-center gap-6 ">

          <div className="topic1 h-[20vh] w-[90%] flex items-center justify-end gap-5">
            <div className="left-content h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center">
              <img className="h-[30px] " src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550b1eff7681300db93_ico_skills-leadership.svg" alt="" />
            </div>
            <div className="right-content h-[100%] w-[70%]  flex flex-col  gap-2">
              <h1 className=" h1  font-medium text-2xl pt-6">Leadership</h1>
              <p className="p text-[18px] ">
                Fully committed to the <br /> success company
              </p>
            </div>
          </div>

          <div className="topic2 h-[20vh] w-[90%]  flex items-center justify-end gap-5">
            <div className="left-content h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center">
            <img className="h-[30px] " src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5500e03d92bc1747cb2_ico_skills-responsibility.svg" alt="" />
            </div>
            <div className="right-content h-[100%] w-[70%]  flex flex-col  gap-2">
              <h1 className=" h1  font-medium text-2xl pt-6">Responsibility</h1>
              <p className="p text-[18px] ">
              Employees will always <br /> be my top priority
              </p>
            </div>
          </div>

          <div className="topic3 h-[20vh] w-[90%]  flex items-center justify-end gap-5">
            <div className="left-content h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center">
              <img className="h-[30px]" src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5506ec5691cba88bb5b_ico_skills-flexibility.svg" alt="" />
            </div>
            <div className="right-content h-[100%] w-[70%]  flex flex-col  gap-2">
              <h1 className=" h1  font-medium text-2xl pt-6">Flexibility</h1>
              <p className="p text-[18px] ">
              The ability to switch is <br /> an important skill
              </p>
            </div>
          </div>


        </div>

        <div className="right  h-[95%] w-[60vw] bg-pink-600 rounded-[20px] text-center">
          <video className="h-full w-full  object-cover " src="https://player.vimeo.com/video/641585003?h=a359e6a27b&background=1&autoplay=1&loop=1&byline=0&title=0&quality=480p"></video>
        </div>

 
      </div>
    </div>
  );
};

export default Page3;
