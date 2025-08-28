'use client'
// import PropTypes from 'react';
import { useRef} from "react";
import {useScroll, useTransform, motion, spring, easeIn} from "motion/react"
import { title } from "process";

interface ServicesProps{
    hovered:boolean;
    setHovered:React.Dispatch<React.SetStateAction<boolean>>;
    setIndex:React.Dispatch<React.SetStateAction<number>>;
}

export default function Services ({hovered,setHovered,setIndex}:ServicesProps){
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({target:ref,offset:["start end","end start"]})
    const borderRadius = useTransform(scrollYProgress, [0, 0.3, 0.8, 0.95], ['50%', '0%', '0%', '50%'])
    const marginTop = useTransform(scrollYProgress, [0,0.28],['25%','0%' ])

    const ServicesData = [
        {title:'React Web Development',description:'Get a fully develop website built using React, Next js, and Tailwind'},
        {title:'Figma to HTML', description:'Turn your figma design into HTML using React with attention to detail'},
        {title:'Web Page Clonning', description:'Get a clone version of your desired webpage with the same function and animation.'}
    ]
    
    const managaHover =(a:boolean,b:number)=>{
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
            className="flex flex-col items-center text-neutral-400/100 h-[130vh] pt-30 w-full bg-neutral-800 ">

            <h1 className="text-5xl font-bold font-horizon leading-10 tracking-wide">Services</h1>
            <p className="text-2xl tracking-wide font-poppins mt-8">Avail Personalized solutions crafted to elevate your online presence</p>
            <div className="text-left my-22 w-2/3 border-b border-neutral-600">
                {ServicesData.map((service,i)=>(
                <motion.div 
                initial={{height:65}}
                whileHover={{height:100}}
                transition={{ease:easeIn}}
                onHoverStart={()=>managaHover(true,i)}
                onHoverEnd={()=>managaHover(false,i)} 
                key={i} className=" border-t border-neutral-600 overflow-y-clip">
                  <h3 className="font-bold text-4xl tracking-normal leading-15">{service.title}</h3>
                  <p className="font-poppins text-[18px] ">{service.description}</p>  
                </motion.div>
                ))}
            </div>

        </motion.div>
    )
}
