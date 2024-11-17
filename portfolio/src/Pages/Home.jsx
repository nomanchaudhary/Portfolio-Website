import React, { useEffect } from 'react';
import { personalDetails } from '../Details';
import { logos } from '../Details';
import AOS from 'aos'
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[]);
  return (
    <div className="container flex flex-wrap justify-between items-center px-5">
      <div className="flex-1 ml-10">
        <h1 data-aos="fade-right" className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Hi 👋 <br />
          I am
        </h1>
        <h1 data-aos="fade-right" data-aos-delay="300" className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
          {personalDetails.name}
        </h1>
        <h1 data-aos="fade-right" data-aos-delay="600" className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {personalDetails.tagline}
        </h1>
      </div>
      <div className="w-1/2 flex justify-end md:justify-center">
        <img data-aos="fade-left" className="w-96 h-auto ml-10" src={logos.myimage} alt="" />
      </div>
    </div>
  );
};

export default Home;
