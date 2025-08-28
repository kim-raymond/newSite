"use client"

import { motion } from "motion/react"

motion

export default function EnterAnimation(){
    return<
    motion.div 
    style={Square}
    whileHover={{scale:1.5}}
    whileTap ={{scale:1, rotate:30,}}
    />
}

// STYLE

const Square = {
    width:100,
    height:100,
    backgroundColor:"#5686F5",
    borderRadius:"10%",
}