// ScrollFadeText.tsx
"use client";
// import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React from "react";


export default function PracticeAnimation() {

  gsap.registerPlugin(useGSAP);
  const tools = ["NEXT", "Vite", "Webpack", "Jasmine", "TypeScript", "GitHub", "Vercel", "Netlify", "Framer-motion","GSAP",];
  // const { useRef } = React;
  const container = useRef(null);


  // useEffect(()=>{
  // gsap.to(".tools",{x:-100,repeat:-1});
  // },[]);
    const toolsCount = 2; // duplicate count for seamless loop

    useGSAP(() => {
      gsap.to(".reactLogo",{rotate:360,repeat:-1,duration:2,ease:"power2.out",repeatDelay:3},)
      const ticker = document.querySelector('.tools');
      if (!ticker) return;
      const tickerWidth = ticker.scrollWidth / toolsCount;
      gsap.to(ticker, {
        x: -tickerWidth,
        duration: 20,
        ease: 'linear',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % -tickerWidth)
        }
      });
    }, {scope:container});
  return (
    <div className="relative w-full h-[130vh] lg:h-[100vh] " ref={container}>
    {/* NAV SECTION */}
    <div className="absolute top-0 flex items-center justify-between w-full  px-[2.5rem] py-[0.75rem] text-gray-950 lg:px-[4.5rem]">
      {/* logo */}
      <div className="flex gap-[0.75rem] items-center justify-center">
        <Image src='/kimlogo.svg' width={27} height={27} alt="logo"/>
        <p className="text-[1.25rem] font-bold">Kim</p>
      </div>

      {/* menu */}
      <div className="hidden lg:block">
        <ul className="flex items-center justify-center gap-[2.75rem] text-[0.875rem] font-medium">
          <li className="cursor-pointer hover:underline hover:underline-offset-8">Home</li>
          <li className="cursor-pointer hover:underline hover:underline-offset-8">About</li>
          <li className="cursor-pointer hover:underline hover:underline-offset-8">Services</li>
          <li className="cursor-pointer hover:underline hover:underline-offset-8">Projects</li>
        </ul>
      </div>

      {/* button */}
      <button className="w-[96px] px-[0.5rem] py-[0.5rem] cursor-pointer border border-black rounded-lg">Say Hi!</button>
    </div>

    {/* HERO CONTAINER */}
    <div className="scroll-smooth flex flex-col items-center justify-center w-full h-full px-[2.5rem] text-neutral-950 lg:flex-row lg:justify-between lg:px-[9rem]">
      
    {/* HERO DETAIL SECTION */}
    <div className="flex flex-col w-full gap-[2rem] items-center justify-center lg:items-start lg:w-[553px]">
      <h1 className="text-[50px] text-start font-semibold leading-10 lg:leading-[81px] lg:text-[96px]">
        React,
        <span className="inline-flex align-middle ml-2">
          <Image className="reactLogo w-[3rem] lg:w-[4.75rem]" src='/react-logo.svg' width={60} height={53} alt="reactlogo"/>
        </span> 
        Tailwind 
        <span className="inline-flex align-middle mx-2">
          <Image className="w-[3rem] lg:w-[4.75rem]" src='/tailwindcss.svg' width={72} height={42} alt="tailwindlogo"/>
        </span>
        Front-end Developer
      </h1>
      <button className="flex items-center justify-center w-full text-[1.5rem] tracking-widest font-semibold cursor-pointer border border-gray-950 rounded-[18px] lg:h-[68px] lg:w-[272px]">
        ABOUT
      </button>
    </div>

    {/* HERO AVATAR SECTION */}
    <div>
      <Image src='/avatar-no-color.png' width={332} height={358} alt="heroavatar"/>
    </div>

    </div>
    {/*TOOLS SECTION */}
      <div className="absolute bottom-0 w-full overflow-hidden py-[1rem]">
        <div className="tools flex gap-[2.75rem] w-max">
          {Array(toolsCount).fill(0).map((_, idx) => (
            tools.map((tool, i) => (
              <p className="text-[1.5rem] text-gray-900 font-medium" key={idx + '-' + i}>{tool}</p>
            ))
          ))}
        </div>
      </div>
    </div>
  );
}
