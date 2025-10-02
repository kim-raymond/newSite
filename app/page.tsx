"use client";
import { useEffect, useRef, useState } from "react";
// import PracticeAnimation from "@/components/ScrollTriggered";
import ApearOnscroll from "@/components/ApearOnscroll";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
// import Offers from "@/components/Offers";
import About from "@/components/About";
// import { hover } from "motion";

export default function Home() {

  const circleRef = useRef<HTMLDivElement | null>(null);

  const [hovered, setHovered] = useState<number>(0);
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

  const Circle:React.CSSProperties = {
    width:20,
    height:20,
    borderRadius:'50%'
  }

  const BigCircle:React.CSSProperties = {
    width:50,
    height:50,
    backgroundColor:'#000000E6',
    borderRadius:'50%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }

  return (
    <>
      {/* Circle is now OUTSIDE the flex container */}
      <div
        ref={circleRef}
        style={{
          transition:'ease-in',
          ...(hovered === 0 
            ? Circle:
            hovered === 1 
            ? BigCircle: 
            hovered === 2 
            ? (Images[index])
            : {}),
          }}
        className="fixed bg-red-500 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      ><p>{hovered === 1 ?'View': hovered === 0 ? '':null}</p>
      </div>

      {/* Main content */}
      <div className="snap-y min-h-screen flex flex-col items-center justify-center text-center bg-neutral-200">
        <ApearOnscroll />
        <Projects
        setHovered={setHovered}/>
        <Services
        setHovered={setHovered}
        setIndex={setIndex} />
        <About />
      </div>
    </>
  );
}
