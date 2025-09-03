'use client'
import { motion } from "motion/react";
import { Londrina_Sketch } from "next/font/google";
// import { div } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
export default function About (){

    const aboutText = `Started Web Development back in year 2019. 
                I have always found joy when it comes to creating something and 
                learning how some technology works. When I discover web development 
                in my senior year in high school. I was so astonished realizing the amount of 
                things I can do through this technology. Consequently, my natural passion to create 
                stuffs keep me doing web development as a hobby, not a task.`

            const openGmailCompose = () => {
            window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=magallaneskim774@gmail.com",
            "_blank",
            "noopener,noreferrer"
            );
        };

    return(
        <div className="grid grid-cols-2 h-[100vh] w-full text-neutral-800 mt-40">
            <div className="flex flex-col items-center">
                <Image src='/about.svg' width={450} height={450} alt="avatar"/>
            </div>
            
            <div className="text-left text-neutral-700 ">
                <h2 className="font-bold font-horizon text-5xl tracking-wide leading-16">About</h2>
                <div className=" w-[25rem]">
               {
                aboutText.split("").map((l,i)=>(
                        <motion.span 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:i*0.01,duration:0.1}}
                        className="" key={i}>{l}
                        </motion.span>
                ))
                } 
                </div>
               
               <div className="flex items-center  w-full h-min mt-10">

               <div className="py-2 px-3 bg-blue-500 rounded-md w-[12rem] text-center mr-4">
                <Link  href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-neutral-100 text-[16px]">Curriculumn-Vitae</Link>
               </div> 

                <button onClick={openGmailCompose}> 
                <Image src='/gmail.svg' width={40} height={40} alt="github" className="mx-6"/>
                </button>

                <Link href="https://github.com/kim-raymond" target="_blank" rel="noopener noreferrer">
                    <Image src='/github-mark.svg' width={33} height={30} alt="github" className="mx-6"/>
               </Link>
               </div>
            </div>
        </div>
    )
}