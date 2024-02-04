"use client"

import React from 'react'
import{IoSunnyOutline} from "react-icons/io5";
import {useTheme} from 'next-themes'
import {LuMoonStar} from "react-icons/lu";

type Props = {}

function DarkAndLightBtn({}: Props) {
  const {resolvedTheme, setTheme}= useTheme();

  function toggleDark(){
    if(resolvedTheme === "light" )setTheme("dark");
    if(resolvedTheme === "dark")setTheme("light")
  }
  return (
    <div className='flex items-center gap-2 pb-4'>

        <p className='text-sm'>

            {resolvedTheme === "light" ? "Dark" : "Light" }
        </p>
       
        <button onClick={toggleDark} className='text-2xl'>
        {resolvedTheme==="light"?<LuMoonStar/>: <IoSunnyOutline />}
        
       
        </button>
        
    </div>
  )
}

export default DarkAndLightBtn