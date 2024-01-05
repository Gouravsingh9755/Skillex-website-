import React from "react";

const Page2 = () => {
  return (
    <div id="cat" className="page2 h-[140vh]  w-full   bg-slate-100   border-2   border-red-600   border-solid  flex flex-col ">
      <div className="heading     h-[50vh]   flex   flex-col   items-center   justify-center   gap-16 ">
        <h1 className="h1   font-semibold   text-5xl ">
          Unlimited access to 100+ instructors.
        </h1>
        <ul className="flex   gap-16 ">
          <span className="font-semibold   border-b-[3px]   border-black   h-9   text-lg">
            All categories
          </span>
          <li className="hover:border-b-[3px]   border-slate-400   h-9   transition-all ease 1 ">
            Entertainment
          </li>
          <li className="hover:border-b-[3px]   border-slate-400   h-9   transition-all ease 1 ">
            Lifestyle
          </li>
          <li className="hover:border-b-[3px]   border-slate-400   h-9   transition-all ease 1 ">
            Writing
          </li>
          <li className="hover:border-b-[3px]   border-slate-400   h-9   transition-all ease 1 ">
            Business
          </li>
          <li className="hover:border-b-[3px]   border-slate-400   h-9   transition-all ease 1 ">
            Food
          </li>
        </ul>
      </div>

      <div className="bottom-content     h-[80vh]   flex  justify-center gap-8  ">
        <div className="box1  h-[65vh]   w-[20vw]    ">
          <div className="top   h-[70%]   rounded-[20px] overflow-hidden ">
            <img
              className="h-full w-full object-cover"
              src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5505ecb8e2f5f217405_categories_01.webp"
              alt=""
            />
          </div>
          <div className="bottom    h-[25%]    ">
            <h1 className="text-3xl font-medium pt-4">Sales Marketing</h1>
            <h3 className="text-xl  pt-2 ">4 month</h3>
          </div>
        </div>

        <div className="box2  h-[70vh]   w-[20vw ">
          <div className="top   h-[75%]   rounded-[20px]  overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550a239182daefe2e21_categories_02.webp"
              alt=""
            />
          </div>
          <div className="bottom    h-[25%]  ">
            <h1 className="text-3xl font-medium pt-4">Data analytics</h1>
            <h3 className="text-xl  pt-2 ">2 month</h3>
          </div>
        </div>

        <div className="box3  h-[75vh]   w-[20vw] ">
          <div className="top   h-[75%]    rounded-[20px] overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550c4055a4a51c6d4ff_categories_03.webp"
              alt=""
            />
          </div>
          <div className="bottom    h-[25%]    ">
            <h1 className="text-3xl font-medium pt-4">Copywriting Pro</h1>
            <h3 className="text-xl  pt-2 ">2 month</h3>
          </div>
        </div>

        <div className="box4  h-[65vh]   w-[20vw] ">
          <div className="top   h-[70%]    rounded-[20px] overflow-hidden ">
            <img
              className="h-full w-full object-cover"
              src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550a23918491cfe2e20_categories_04-p-500.webp"
              alt=""
            />
          </div>
          <div className="bottom    h-[25%]    ">
            <h1 className="text-3xl font-medium pt-4">Design art</h1>
            <h3 className="text-xl  pt-2 ">4 month</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
