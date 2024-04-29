import React from 'react'

const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      <div className='rounded-xl relative'>
        <div className='absolute w-[300px] h-full bg-black/50 rounded-xl text-white'> 
            <p className='font-bold text-2xl px-4 pt-4'>Sun's Out, BOGO'S Out</p>
            <p className='px-2'>Through B/26</p>
            <button className='border-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-[300px] object-cover rounded-xl' 
        src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div>
     
      <div className='rounded-xl relative'>
        <div className='absolute w-[300px] h-full bg-black/50 rounded-xl text-white'> 
            <p className='font-bold text-2xl px-4 pt-4'>New Restaurant</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-[300px] object-cover rounded-xl' 
        src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div>

      <div className='rounded-xl relative'>
        <div className='absolute w-[300px] h-full bg-black/50 rounded-xl text-white'> 
            <p className='font-bold text-2xl px-4 pt-4'>We Deliver Deserts</p>
            <p className='px-2'>Tasty Treat</p>
            <button className='border-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-[300px] object-cover rounded-xl' 
        src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div>
    </div>
  )
}

export default HeadLineCards
