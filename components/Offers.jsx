"use client";
import { motion, useScroll, useTransform, useMotionValueEvent, easeIn } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Offers() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const [pinState, setPinState] = useState("before"); // "before", "fixed", "after"
  const topOffset = 40; // matches tailwind top-10 (40px)

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current || !containerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;

      if (sectionRect.top > topOffset) {
        setPinState("before");
      } else if (
        sectionRect.top <= topOffset &&
        sectionRect.bottom > containerHeight + topOffset
      ) {
        setPinState("fixed");
      } else if (sectionRect.bottom <= containerHeight + topOffset) {
        setPinState("after");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Font toggle state: true = filled font (font-horizon), false = outlined (font-horizon-outlined)
  const [fontToggle, setFontToggle] = useState({
    heading1: false,
    heading2: false,
    heading3: false,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setFontToggle({
      heading1: latest >= 0 && latest < 0.3,
      heading2: latest >= 0.3 && latest < 0.6,
      heading3: latest >= 0.6 && latest < 0.9,
    });
  });

  const containerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const containerY = useTransform(scrollYProgress, [0, 0.1], [50, 0]);

  const img1Right = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [
    "-45%",
    "-4%",
    "-4%",
    "-50%",
  ]);
  const img1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.4], [
    0,
    1,
    1,
    0,
  ]);

  const img2Right = useTransform(scrollYProgress, [0.36, 0.45, 0.55, 0.6], [
    "-45%",
    "-1%",
    "-1%",
    "-45%",
  ]);
  const img2Opacity = useTransform(scrollYProgress, [0.36, 0.45, 0.95, 1], [
    0,
    1,
    1,
    0,
  ]);

  const textTop = useTransform(scrollYProgress,[0.25,0.8],[200,-80])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const absoluteTop = sectionRef.current
    ? sectionRef.current.offsetHeight - (containerRef.current?.offsetHeight || 0)
    : 0;

  let positionClass = "absolute left-0";
  let style = {
    opacity: containerOpacity,
    y: containerY,
    top: 0,
  };

  if (pinState === "fixed") {
    positionClass = "fixed top-8 left-0";
    delete style.top;
  } else if (pinState === "after") {
    positionClass = "absolute left-0";
    style.top = absoluteTop;
  } else if (pinState === "before") {
    positionClass = "absolute left-0";
    style.top = 0;
  }

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[400vh] flex flex-col items-center mt-5 "
    >
      
      <motion.div
        ref={containerRef}
        style={style}
        transition={{ duration: 0.15 }}
        className={`${positionClass} flex flex-col items-center justify-center w-full h-[100vh] bg-neutral-100 overflow-hidden border border-black`}
      >
        {/* Text */}
        <motion.div className="text-left text-[18px] text-neutral-700 w-[70%] h-[70%] border border-red-400">
        <div className="absolute w-min h-min top-0 text-2xl text-black border border-black z-10"><h3>SERVICES</h3></div>


          
        </motion.div>

        {/* First image */}
        <motion.div
          style={{ right: img1Right, opacity: img1Opacity }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-[18%] right-[-3%] z-20"
        >
          <Image src="/clone.svg" alt="web" width={700} height={600} />
        </motion.div>

        {/* Second image */}
        <motion.div
          style={{ right: img2Right, opacity: img2Opacity }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-[18%] right-[-3%] z-20"
        >
          <Image src="/todo.svg" alt="web" width={600} height={500} />
        </motion.div>

        {/* Background */}
        <motion.div
          style={{ opacity: bgOpacity }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-[13%] right-0 w-120 h-110 bg-purple-600/70 rounded-l-3xl z-10"
        />
      </motion.div>
    </div>
  );
}
