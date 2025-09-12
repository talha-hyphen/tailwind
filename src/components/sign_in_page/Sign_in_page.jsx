import React, { useState } from 'react'
 

 


export default function Sign_in_page() {

  const [signInActive, setSignInActive] = useState(true)

  return (

    // signIn login button

    <div className='bg-white w-80   md:w-100 h-110  rounded-2xl
    max-w-sm mx-auto mt-10 overflow-hidden '>
      <div className='flex justify-between cursor-pointer  text-xl font-small text-black '>
        <div className={signInActive ? 'bg-sky-800 text-white flex justify-center p-[10px] mt-0 w-[50%] ' : 'bg-slate-200 flex justify-center  p-[10px] mt-0 w-[50%]'}
          onClick={() => setSignInActive(true)}>Sign Up</div>
        <div className={!signInActive ? 'bg-sky-800 text-white flex justify-center p-[10px] mt-0 w-[50%]' : 'bg-slate-200 flex justify-center  p-[10px] mt-0 w-[50%]'}
          onClick={() => setSignInActive(false)} >Login</div>

      </div>

{signInActive? <div>
  {/* signIn form */}
<form className='flex flex-col p-10 gap-1'>

        <div className='text-3xl font-semibold'>Sign Up form</div>
         <input type='email' placeholder='  Email'
        className='py-[5px] p-[15px] text-black  text-lg bg-slate-100 rounded-lg   mt-9' />  <br />
         <input type='password' placeholder='  Password'
        className='py-[5px] p-[15px] text-black  text-lg bg-slate-100 rounded-lg' /> <br />
         <input type='password' placeholder='  Confirm Password' 
        className='py-[5px] p-[15px] text-black  text-lg bg-slate-100 rounded-lg'/>


      </form> 
</div> : <div>

{/* login form */}

  <form  className='p-[40px]' >
   
<div className=' text-3xl font-semibold  mb-8'>Login Form</div>

    <label>Name</label> <br/>
    <input type='text'   placeholder='Enter Name' 
    className='mb-3 py-[5px] p-[19px] md:px-[48px] text-black  text-lg bg-slate-100 rounded-lg '/><br/>
 
     
      
    <label>Email</label><br/>
    <input type='email' id='email' placeholder='Email'
    className='mb-3 py-[5px] p-[19px] md:px-[48px] text-black  text-lg bg-slate-100 rounded-lg' /><br/>
     
     
 
    <label>Password</label><br/>
    <input type='password' id='password' placeholder='Password' 
    className='mb-3 py-[5px]  p-[19px] md:px-[48px] text-black  text-lg bg-slate-100 rounded-lg'/>
 
<div className='pt-5  flex justify-center'>
  <p className='text-slate-800'>Create an account? <a className='cursor-pointer text-blue-700 ' onClick={()=>{setSignInActive(true)}} >Signup</a></p>
</div>
 
  </form>
</div> }

      



         




    </div>
  )
}
