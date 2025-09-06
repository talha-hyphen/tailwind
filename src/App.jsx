import React from 'react'
 export default function App() {

 

  return (
    <div className='bg-slate-800 h-screen'>

{/* navbar starts here */}

<nav className='flex justify-between px-5 md:px-10 
max-w-full items-center h-14 bg-sky-500 '>
  <div className='text-3xl font-normal text-slate-200
  border-b-4 border-yellow-500 cursor-pointer'>TALHA WAJID</div>
  <div>
    <ul className='hidden md:flex space-x-15
    text-white font-semibold text-lg cursor-pointer'>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
  {/* web view sign in button */}
  <button className='hidden md:block bg-green-300 px-[14px] py-[6px]
    rounded-lg   text-sm  cursor-pointer'>Sign in</button>
   
   {/* mobile view hamburger icon */}
   <div className='md:hidden text-3xl cursor-pointer'>&#8801;</div>
</nav>


      <div className='text-red-400 '
      >App talha</div>
      <div className='p-6
      max-w-sm mx-auto bg-white rounded-2xl 
       grid place-content-center '>
        <div></div>
        <div className='flex items-center space-x-6'>
        <div>
          <img className='h-14 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmNCtUxGTpR8gFKlx_lWZyT0-2LIb8Om63g&s' alt='' />
        </div>
        <div className='text-xl font-medium text-black'>
          Physics Wallah
          <p className='text-slate-600 font-normal '>This is a test card.</p>
        </div>
      </div>
      </div>
    </div>
  )
}
