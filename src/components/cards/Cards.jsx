import React from 'react'
import profile from '../../assets/profile.jpg'
import pro2 from '../../assets/pro2.jpg'
import pro3 from '../../assets/pro3.jpg'
import pro4 from '../../assets/pro4.jpg'
import pro5 from '../../assets/pro5.jpg'
import pro6 from '../../assets/pro6.jpg'
export default function Cards() {

const cards=[{
  id:1,name:' TALHA',photo:profile,description: 'Lorem ipsum, dolor sit amet consectetur adipisi nde ea, deserunt corporis aliquam vero pariatur! '
},{
  id:2,photo:pro2, description: 'Lorem ipsum, dolor sit amet consectetur adipisi nde ea, deserunt corporis aliquam vero pariatur! '
},{
  id:3,photo:pro3, description: 'Lorem ipsum, dolor sit amet consectetur adipisi nde ea, deserunt corporis aliquam vero pariatur! '
},{
  id:4,photo:pro4, description: 'Lorem ipsum, dolor sit amet consectetur adipisi nde ea, deserunt corporis aliquam vero pariatur! '
},{
  id:5,photo:pro5, description: 'Lorem ipsum, dolor sit amet consectetur adipisi nde ea, deserunt corporis aliquam vero pariatur! '
},{
  id:6,photo:pro6, description: 'Lorem ipsum, dolor sit amet consectetur adipisi nde ea, deserunt corporis aliquam vero pariatur! '
}]

  return (
    <div className='flex justify-center flex-wrap'> 

    {cards.map((items)=>{
        return<div key={items.id} className='h-70  w-70  bg-gray-900 m-8
       text-white rounded-2xl p-4
        hover:bg-gray-800 cursor-pointer shadow-lg shadow-blue-500/100 '>
          <img className='h-30 w-30 rounded-full mx-auto mt-4' src={items.photo} alt=''/>
         <div className='text-2xl pt-4 font-medium'>Name:  TALHA
          </div>
          <div className='text-sm text-slate-300 '>{items.description}</div>
         
          </div>
    })}



        {/* <div className='h-70  w-70 bg-gray-700 m-8
        hover:bg-amber-50'></div>
        <div className='h-70  w-70 bg-gray-700 m-8
        hover:bg-amber-50'></div>
        <div className='h-70  w-70 bg-gray-700 m-8
        hover:bg-amber-50'></div>
        <div className='h-70  w-70 bg-gray-700 m-8
        hover:bg-amber-50'></div>
        <div className='h-70  w-70 bg-gray-700 m-8
        hover:bg-amber-50'></div> */}
    </div>
  )
}
