import React from "react";

const App = () => {
  return (
    <div className="container w-full ">

<div className="nav  h-[20vh] w-full  flex items-center justify-around  bg-slate-100  top-0 z-20 ">
          <h1 className=" font-serif font-bold text-3xl">Skillex.</h1>
          <ul className="flex items-center gap-12 text-lg">
            <li>Find passion</li>
            <li><a href="#cat">Categories</a></li>
            <li>Skill</li>
            <li>Customer</li>
          </ul>
          <ul className="flex items-center gap-8 text-lg">
            <h3>Login</h3>
            <button className=" nav-button px-9 py-2 rounded-full bg-black text-white hover:bg-green-300 hover:text-black text-xl">
              Free Trial
            </button>
          </ul>
        </div>

      <div className="page1  h-[100vh]  w-full bg-slate-100  ">
        <div className="maincontent  h-[100vh]  w-full  mt-[20vh]   flex relative">
          <div className="Left  h-full  w-[35vw] ">
            <ul className="text-8xl font-medium  flex items-center justify-self-end flex-col  pt-20 ">
              <li>Watch.</li>
              <li>Learn.</li>
              <li>Grow.</li>
            </ul>

            <div className="form h-[20vh] w-[33vw] bg-white absolute z-10 left-20  bottom-[12%] flex items-center">
              <input
                type="text"
                placeholder="Find Your Passion"
                className="  h-[19vh] w-[23vw] text-center  text-lg  outline-green-300 "
              />

              <button className="h-full w-[10vw] bg-green-200 text-3xl font-medium hover:bg-orange-300 ">
                GO
              </button>
            </div>
          </div>

          <div className="Right  h-full  w-[60vw]  flex items-center gap-5 px-2">
            <div className="R1  h-[95vh]  w-[30vw]   rounded-2xl overflow-hidden relative">
              <img
                className="h-full w-full object-cover absolute scale-[1.2] top-7"
                src="https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce7320d030e82c15028_hero_person-1.webp"
                alt=""
              />
            </div>
            <div className="R1  h-[95vh]  w-[15vw]  bg-blue-400  rounded-2xl overflow-hidden relative">
              <img
                className="h-full min-w-full object-cover absolute scale-[1.2] top-7 "
                src="https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce3e584104be2e330e0_hero_person-2.webp"
                alt=""
              />
            </div>
            <div className="R1  h-[95vh]  w-[15vw]  bg-blue-400 rounded-2xl overflow-hidden relative ">
              <img
                className="h-full min-w-full object-cover absolute scale-[1.2] top-7"
                src="https://assets.website-files.com/617fa48948c7ab24b715140e/6183bb01e5841050e8e31f3b_hero_person-3.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
