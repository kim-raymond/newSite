'use client'
import Image from "next/image";
import Link from "next/link";
export default function About (){
    return(
        <div className="grid grid-cols-2 h-[100vh] w-full text-neutral-800 mt-40">
            <div className="flex flex-col items-center">
                <Image src='/about.svg' width={450} height={450} alt="avatar"/>
            </div>
            
            <div className="text-left text-neutral-700 ">
                <h2 className="font-bold font-horizon text-5xl tracking-wide leading-16">About</h2>
                <p className="font- w-2/3 text-[18px]">Started Web Development back in year 2019. I have always found joy when it comes to creating something and learning how some technology works. When I discover web development in my senior year in high school. I was so astonished realizing the amount of things I can do through this technology. Consequently, my natural passion to create stuffs keep me doing web development as a hobby, not a task.</p>
               
               <div className="flex items-center  w-full h-min mt-10">

               <div className="p-2 bg-blue-500 rounded-md w-1/4 text-center mr-4">
                <Link  href="/" className="text-neutral-100 text-[16px]">Curriculumn-Vitae</Link>
               </div> 

                <div>
                <Image src='/gmail.svg' width={40} height={40} alt="github" className="mx-6"/>
                </div>

                <div>
                    <Image src='/github-mark.svg' width={33} height={30} alt="github" className="mx-6"/>
               </div>
               </div>
            </div>
        </div>
    )
}