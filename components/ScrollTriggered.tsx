"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

export default function PracticeAnimation() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  return(
    <div className='fixed w-90 h-[80%]'>
        <motion.div className="absolute top-0 left-0 right-0 h-2 bg-amber-700 origin-left"
        style={{scaleX:scrollYProgress}}/>
        <div ref={scrollRef}
        className="h-full overflow-y-scroll space-y-2 p-2 ">
           {Array.from({length:20}).map((_,i)=>(
            <p key={i}>{i+1}. gwapo si Kim Raymond M.Magallanes </p>
           ))}
        </div>
    </div>
  );
}
