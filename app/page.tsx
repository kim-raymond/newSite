"use client";
import { useEffect, useRef, useState } from "react";
// import PracticeAnimation from "@/components/ScrollTriggered";
import ApearOnscroll from "@/components/ApearOnscroll";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
// import Offers from "@/components/Offers";
import About from "@/components/About";

export default function Home() {

  const circleRef = useRef<HTMLDivElement | null>(null);

  const [hovered, setHovered] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0)

  const Images = [
    {
    width:300,
    height:150,
    borderRadius:10,
    backgroundImage:"url('blogr.svg')",
    backgroundSize:"cover",
    backgroundPosition:"center"
    },    {
    width:300,
    height:150,
    borderRadius:10,
    backgroundImage:"url('sunnyside.svg')",
    backgroundSize:"cover",
    backgroundPosition:"center"
    },    {
    width:300,
    height:150,
    borderRadius:10,
    backgroundImage:"url('clone.svg')",
    backgroundSize:"cover",
    backgroundPosition:"center"
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      if (circleRef.current) {
        circleRef.current.style.left = `${e.clientX}px`;
        circleRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const Circle = {
    width:20,
    height:20,
    borderRadius:'50%'
  }

  return (
    <>
      {/* Circle is now OUTSIDE the flex container */}
      <div
        ref={circleRef}
        style={hovered?Images[index]:Circle}
        className="fixed bg-red-500 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      ></div>

      {/* Main content */}
      <div className="snap-y min-h-screen flex flex-col items-center justify-center text-center bg-neutral-200">
        <ApearOnscroll />
        <Projects />
        <Services
        hovered={hovered}
        setHovered={setHovered}
        setIndex={setIndex} />
        <About />
      </div>
    </>
  );
}
