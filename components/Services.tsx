'use client'
// import PropTypes from 'react';
import { useRef} from "react";
import {useScroll, useTransform, motion, spring, easeIn} from "motion/react"
// import { title } from "process";

interface ServicesProps{
    setHovered:React.Dispatch<React.SetStateAction<number>>;
    setIndex:React.Dispatch<React.SetStateAction<number>>;
}

export default function Services ({setHovered,setIndex}:ServicesProps){
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({target:ref,offset:["start end","end start"]})
    const borderRadius = useTransform(scrollYProgress, [0, 0.3, 0.8, 0.95], ['50%', '0%', '0%', '50%'])
    const marginTop = useTransform(scrollYProgress, [0,0.28],['25%','0%' ])

    const ServicesData = [
        {title:'React Web Development',description:'Get a fully develop website built using React, Next js, and Tailwind'},
        {title:'Figma to HTML', description:'Turn your figma design into HTML using React with attention to detail'},
        {title:'Web Page Clonning', description:'Get a clone version of your desired webpage with the same function and animation.'}
    ]
    
    const managaHover =(a:number,b:number)=>{
        setHovered(a)
        setIndex(b)
    }

    return(
        
        <motion.div 
        ref={ref} 
        style={{borderRadius,marginTop}} 
        
        transition={{
            type:spring,
            delay:0.5,
            damping:20,
            ease:easeIn,
            restSpeed:0.2
        }} 
            className="flex flex-col items-center text-neutral-400/100 h-[120vh] pt-[3rem] px-[2rem] md:px-[10.75rem] w-full bg-neutral-800 ">

            <h1 className="text-[1.5rem] font-medium font-poppins leading-10 ">| Services |</h1>
            <p className="text-[1.7rem] tracking-wide font-poppins mt-8">Avail Personalized solutions crafted to advance your online presence</p>
            <div className="text-left my-22 w-full border-b border-neutral-600">
                {ServicesData.map((service,i)=>(
                <motion.div 
                initial={{height:65}}
                whileHover={{height:100}}
                transition={{ease:easeIn}}
                onHoverStart={()=>managaHover(2,i)}
                onHoverEnd={()=>managaHover(0,i)} 
                key={i} className="border-t border-neutral-600 overflow-y-clip">
                  <h3 className="font-bold text-4xl tracking-normal leading-15">{service.title}</h3>
                  <p className="font-poppins text-[18px] ">{service.description}</p>  
                </motion.div>
                ))}
            </div>

        </motion.div>
    )
}
