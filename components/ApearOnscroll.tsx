// ScrollFadeText.tsx
"use client";
// import { useScroll, useTransform, motion } from "motion/react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";


export default function PracticeAnimation() {

  gsap.registerPlugin(useGSAP);
  const tools = ["NEXT", "Vite", "Webpack", "Jasmine", "TypeScript", "GitHub", "Vercel", "Netlify", "Framer-motion","GSAP",];
  const { useRef } = require("react");
  const container = useRef();


  // useEffect(()=>{
  // gsap.to(".tools",{x:-100,repeat:-1});
  // },[]);
    const toolsCount = 2; // duplicate count for seamless loop

    useGSAP(() => {
      const ticker = document.querySelector('.tools-ticker');
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
    <div className="w-full h-[100vh] ">
    {/* NAV SECTION */}
    <div className="absolute flex items-center justify-between w-full h-1.5rem px-[4.5rem] py-[0.75rem] text-gray-950">
      {/* logo */}
      <div className="flex gap-[0.75rem] items-center justify-center">
        <Image src='/kimlogo.svg' width={27} height={27} alt="logo"/>
        <p className="text-[1.25rem] font-bold">Kim</p>
      </div>

      {/* menu */}
      <div>
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
    <div className="scroll-smooth flex items-center justify-between w-full h-full px-[9rem] text-neutral-950 ">
    {/* HERO DETAIL SECTION */}
    <div className="flex flex-col w-[553px] gap-[2rem] items-start justify-start">
    <h1 className="text-[96px] text-start font-semibold leading-[81px]">
    React,
    <span className="inline-flex align-middle ml-2">
      <Image src='/react-logo.svg' width={60} height={53} alt="reactlogo"/>
    </span> 
    Tailwind 
    <span className="inline-flex align-middle ml-2">
      <Image src='/tailwindcss.svg' width={72} height={42} alt="tailwindlogo"/>
    </span>
    Front-end Developer</h1>
        <button className="flex items-center justify-center w-[272px] h-[68px] text-[1.5rem] tracking-widest font-semibold border border-gray-950 rounded-[18px]">
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
        <div className="tools-ticker flex gap-[2.75rem] w-max">
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
