import React from "react";
import "../index.css";
import { MdVerifiedUser } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Sec2 from '../asset/Sec2.png'
function Section2() {
  return (
    <div>
      {" "}
      <div className=" grid grid-cols-2 w-full py-10 px-5 md:px-10 bg-white rounded-b-3xl">
        <div className="col-span-2 md:col-span-1  md:px-10  flex flex-col justify-center items-center">
          <div
            className="text-md text-gray-700 font-medium px-4 py-2 my-shad rounded-full flex items-center"
            style={{ boxShadow: " 0px 7px 25px 4px rgba(17, 83, 91, 0.18)" }}
          >
            {" "}
            <MdVerifiedUser className=" text-xl mr-3 text-blue-600" />
            Customers’ Needs Above All Else
          </div>

          <div className="w-full my-6">
            <h2 className="text-[30px] md:text-[42px] text-left  font-semibold">
              Take Control
            </h2>
            <h2 className="text-[30px] md:text-[42px] text-left  font-semibold text-red-500">
              Monitor Usage & Change Filters
            </h2>
            <h2 className="text-[30px] md:text-[42px] text-left  font-semibold">
              No Technician Needed
            </h2>
          </div>

          <h2 className="text-[16px] md:text-[20px] text-gray-500">
            We have crafted a product that addresses the real frustrations of a
            customer. The first step is to ensure there are zero service delays.
          </h2>

          <div className="w-full mt-6">
            <div className="flex ">
              <BsFillCheckCircleFill className="text-[39px] md:text-[30px] text-green-400" />
              <div className="ml-4 ">
                <h3 className=" text-xl md:text-2xl font-bold text-gray-900">
                  Smart Water Purifier With Self Servicing Capability
                </h3>
                <h3 className=" text-[16px] md:text-[20px] my-4 text-gray-500">
                  Say goodbye to the hassle of scheduling a technician for
                  purifier maintenance with our{" "}
                  <span className="font-bold">self-replacing</span> filters.
                </h3>
              </div>
            </div>
          </div>
          
          <div className="w-full mt-6">
            <div className="flex ">
              <BsFillCheckCircleFill className="text-[39px] md:text-[30px] text-green-400" />
              <div className="ml-4 ">
                <h3 className=" text-xl md:text-2xl font-bold text-gray-900">
                Compensation For Service Delays
                </h3>
                <h3 className=" text-[16px] md:text-[20px] my-4 text-gray-500">
                You are entitled to a compensation of <span className="font-bold"> 100 Rs/Day</span> if service is delayed for more than 24 hours.
                </h3>
              </div>
            </div>
          </div>

          <button className='px-10 my-4  bg-blue-500 hover:bg-blue-700 py-4 rounded-full text-md md:text-xl text-white'>
Next: Smart Water Conservation</button>
          

        </div>

        <div className="col-span-2 order-first md:order-last md:col-span-1 flex gap-10 justify-center items-center flex-col mb-10">
          <img src={Sec2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section2;
