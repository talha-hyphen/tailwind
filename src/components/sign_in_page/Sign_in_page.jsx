import React,{useState} from 'react'

export default function Sign_in_page() {

const [signInActive,setSignInActive]=useState(true)

  return (
    <div className='bg-white   w-100 h-100  rounded-2xl
    max-w-sm mx-auto mt-10 overflow-hidden '>  
<div className='flex justify-between cursor-pointer  text-xl font-small text-black '>
    <div className={signInActive?'bg-sky-800 text-white flex justify-center p-[10px] mt-0 w-[50%] ':'bg-slate-200 flex justify-center  p-[10px] mt-0 w-[50%]' } 
    onClick={()=> setSignInActive(true)}>Sign Up</div>
    <div className={!signInActive?'bg-sky-800 text-white flex justify-center p-[10px] mt-0 w-[50%]':'bg-slate-200 flex justify-center  p-[10px] mt-0 w-[50%]'}
      onClick={()=> setSignInActive(false)} >Login</div>
</div>

    </div>
  )
}
