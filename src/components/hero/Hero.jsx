import React from "react";
import sideimage from "../../assets/sideimage.svg";
import sideimage2 from "../../assets/sideimage2.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <main className="bg-[#070624] w-screen">
       <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">
      <h1 className="text-[30px] md:text-[34px] font-bold capitalize  text-white mx-20 mt-10">
        Transforming Finance with ThriftChain:{" "}
      </h1>
      <h2 className="text-[30px] md:text-[32px] font-bold capitalize text-white  mx-20">
        Your Path to <span className="text-[#BD5FB8]">Financial Freedom.</span>
      </h2>
      <div className="grid grid-cols-3 gap-0 h-max">
        <img src={sideimage} alt="sideimage" />
        <div className="border-2 border-white bg-[#070624] rounded-lg mb-6 sm:mb-0 w-[340px] h-[300px]">
          <h2 className="text-white text-xl  text-center font-bold leading-loose">
            Get Started
          </h2>
          <h3 className="text-white text-sm  text-center font-normal">
            Get Started by connecting your wallet
          </h3>
          <div className="mx-24 mb-20 mt-4">
          <ConnectButton />
          </div>
          <h3 className="text-white text-sm  text-center font-normal">Already have an account? <Link to='/log-in'><span className="text-[#BD5FB8]">Log in</span></Link></h3>
        </div>
        <img src={sideimage2} alt="sideimage2" class='lg:block hidden mx-24'/>
      </div>
      <div className="grid grid-cols-4 gap-7 mx-40 mb-3 mt-2">
        <div className="border-2 bg-[#060E37] rounded-lg mb-6 sm:mb-0 w-[250px] h-[70px] gap-4">
          <p className=" text-white text-left text-md font-normal leading-relaxed mx-1">
            ThriftChain is Secure, Transparent,
            <br></br>and Efficient
          </p>
        </div>
        <div className="border-2 bg-[#060E37] rounded-lg mb-6 sm:mb-0 w-[250px] h-[70px] gap-4 mx-96 ">
          <p className=" text-white text-left text-md font-normal leading-relaxed mx-1">
            ThriftChain is the Future of
            <br></br>Financial Planning
          </p>
        </div>
      </div>
      </div>
      <hr class='lg:block hidden'/>
    </main>
  );
};

export default Hero;
