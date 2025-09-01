"use client";

import { easeInOut, motion } from "framer-motion";
import { useRef} from "react";
import Image from "next/image";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  // const [startAnimation, setStartAnimation] = useState(false);

  // Image array
  const images = [
    { src: "/clone.svg", width: 300, height: 100, alt: "web" },
    { src: "/todo.svg", width: 300, height: 100, alt: "design" },
    { src: "/strum.svg", width: 300, height: 100, alt: "app" },
  ];

  const secondImages = [
    {src:"/guitarChords.svg", width:500,height:100, alt:"strum hear"},
    {src:"/pamana.svg", width:500, height:100, alt:"strum hear"},
    {src:"/sunnyside.svg", width:500, height:100, alt:"strum hear"},
    {src:"/blogr.svg", width:500, height:100, alt:"strum hear"},
  ]

  // Separate background color array
  const backgrounds = ["bg-slate-400","bg-rose-800/50", "bg-purple-600/70"];

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setStartAnimation(true);
  //       }
  //     },
  //     { threshold: 1 }
  //   );

  //   if (sectionRef.current) observer.observe(sectionRef.current);
  //   return () => {
  //     if (sectionRef.current) observer.unobserve(sectionRef.current);
  //   };
  // }, []);

  return (
    <div ref={sectionRef} className="flex flex-col  h-[150vh] mt-30 mb-10">
      {/* Section Title */}
      <div className="relative text-left text-[2.5em] font-bold text-neutral-600 font-horizon h-12">
        <motion.h1
          initial={{ opacity: 0, marginTop: 80 }}
          whileInView={{ opacity: 1, marginTop: 0 }}
          transition={{
            delay: 0.3,
            type: "spring",
            restSpeed: 0.8,
            ease: easeInOut,
          }}
          className="absolute"
        >
          RECENT PROJECTS
        </motion.h1>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-3 gap-8 justify-items-stretch mt-8">
        {images.map((img, i) => (
          <motion.div key={i} className="relative w-80 h-70">
            {/* Background using separate array */}
            <motion.div
              initial={{ opacity: 0, top: "20%" }}
              whileInView={{opacity: 1, top: "10%" }}
              transition={{
                type: "spring",
                delay: 0.5 + 0.1 * i,
                stiffness: 120,
                damping: 20,
              }}
              className={`relative h-45 ${backgrounds[i]} rounded-[5%]`}
            >
              {/* Image centered and overlapping above */}
              <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{bottom:20}}>
                <Image
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={img.alt}
                  className="rounded-lg -translate-y-6"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className=" grid grid-cols-2 gap-2 h-[80vh]">
        {secondImages.map((image,i)=>(
          <div key={i}
          className='
          flex flex-col 
          items-center justify-center 
          bg-size-(--bg-normal) bg-no-repeat bg-center
          hover:bg-size-(--bg-zoomed)
          transition-all duration-500 ease-in-out'
            style={{
            backgroundImage: `url(${image.src})`,
          }}></div>

        ))}
      </div>
    </div>
  );
}
