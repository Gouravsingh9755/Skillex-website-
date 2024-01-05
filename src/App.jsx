'use strict';
import React, { useRef, useState } from 'react';

const App = () => {
	const btnHover = useRef();
  const btnH = btnHover.current;
  // console.log(btnH);
	const [btnOn, setbtnOn] = useState(false);


	const onMouseEnterBtn = () => {
		setbtnOn(true);
    console.log(btnOn);
	};
	const onMousLeaveBtn = () => {
		setbtnOn(false);
    console.log(btnOn);
	};


     const GoBtnHover = useRef()
     const GoHover = GoBtnHover.current
     
   const [hoverValue, sethoverValue] = useState(false)

     const GoEnter = ()=>{
      sethoverValue(true)
       console.log(hoverValue);
     }

     
     const GoLeave = ()=>{
      sethoverValue(false)
      console.log(hoverValue);
     }


	return (
		<div className="container w-full ">
			<div className="nav  h-[20vh] w-full  flex items-center justify-around fixed  bg-slate-100  top-0 z-20 ">
				<h1 className=" font-serif font-bold text-3xl">Skillex.</h1>
				<ul className="flex items-center gap-12 text-lg">
					<li>Find passion</li>
					<li>
						<a href="#cat">Categories</a>
					</li>
					<li>Skill</li>
					<li>Customer</li>
				</ul>
				<ul className="flex items-center gap-8 text-lg">
					<h3>Login</h3>
					<button
						ref={btnHover}
						onMouseEnter={onMouseEnterBtn}
						onMouseLeave={onMousLeaveBtn}
						className=" relative overflow-hidden  nav-button  px-9 py-2 rounded-full  hover:text-black bg-black text-white text-xl"
					>
						<h1 className={`z-10 relative transition-all duration-400 ease-in-out`}>Free Trail</h1>
						<span
							ref={btnHover}
							className={`block absolute  -z-0 bg-green-300 h-[100%] rounded-full  w-[100%] ${
								btnOn ? 'top-0' : 'top-[100%]'
							} transition-all ease-in-out duration-300 left-0`}
						></span>
					</button>
				</ul>
			</div>

			<div className="page1  h-[100vh]  w-full bg-slate-100  ">
				<div className="maincontent  h-[100vh]  w-full  mt-[20vh]   flex relative">
					<div className="Left  h-full  w-[35vw] ">
						<ul className="text-8xl font-medium  flex flex-col pl-20 pt-20 ">
							<li>Watch.</li>
							<li>Learn.</li>
							<li>Grow.</li>
						</ul>

						<div className="form h-[20vh] w-[33vw] bg-white absolute z-10 left-20  bottom-[12%] flex items-center">
							<input
								type="text"
								placeholder="Find Your Passion"
								className="  h-[20vh] w-[23vw] text-center  text-lg  outline-green-300 "
							/>

							<button ref={GoBtnHover}
              onMouseEnter={GoEnter}
              onMouseLeave={GoLeave} className="h-[20.3vh] w-[10vw] bg-green-200 text-3xl font-medium  relative overflow-hidden ">

								<h1 className='transition-all duration-400 ease-in-out relative  z-10 '>GO</h1>
                <span className={`absolute h-[100%] w-[100%] bg-orange-300 left-0 ${hoverValue? 'bottom-0' : '-bottom-[100%]'} transition-all duration-500 ease-in-out`} ></span>

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
