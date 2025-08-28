// ScrollFadeText.tsx
"use client";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import Image from "next/image";


export default function PracticeAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);
  const top = useTransform(scrollYProgress,[0.5, 0.7],['60%', '80%'])

  return (
    <div className="scroll-smooth flex flex-col items-center w-screen h-[100vh]  text-neutral-950 mb-30 ">

        <motion.div 
        style={{top}}
        className="absolute top-[60%] left-[52%] z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/avatar.png"
          alt="Overlay"
          width={400}
          height={400}
          className="opacity-100 "
        />
          <p className=" text-2xl tracking-wide text-neutral-500 font-medium font-poppins">Front-end Developer UI/UX    Designer</p>

      </motion.div>

      <motion.div
        ref={ref}
        style={{ opacity }}
        className="mt-20 w-[140vh] h-full text-3xl text-center wrap-anywhere  leading-20 ">
        Bridging {"   "}<strong className="text-4xl font-horizon text-bermuda">CREATIVITY</strong> and{"  "}
        <span className="text-[20vh] font-bold font-horizon leading-28 text-bermuda">FUNCTIONALITY</span>

      </motion.div>

    </div>
  );
}
