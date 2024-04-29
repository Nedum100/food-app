import React, {useState} from 'react'
import { data } from '../data/Data'

const Food = () => {
  const [foods, SetFoods] = useState(data)
  const filterType = (category) => {
    SetFoods(
      data.filter((item)=>{
        return item.category === category
     })
    )
  }
  const filterPrice = (price) => {
    SetFoods(
      data.filter((item)=>{
        return item.price === price
     })
    )
  }

  

  return (
    <div className='mx-w-[1640px] m-auto px-4 py-12'>
      <hi className='text-orange-600 font-bold text-4xl text-center'>Top Rated Items</hi>

      <div className='flex flex-col lg:flex-row justify-between'>

        <div>
           <p className='font-bold text-gray-700'>Filter Types</p>
           <div className='flex justify-between flex-wrap'>
           <button onClick={() => SetFoods(data)} classNcame='m-1 border-orage-600 text-orange-600 hover:bg-orange-600 hover:text-white-600'>All</button>
           <button onClick={() => filterType('burger')} className='m-1 border-orage-600 text-orange-600 hover:bg-orange-600 hover:text-white-600'>Burgers</button>
           <button onClick={() => filterType('pizza')} className='m-1 border-orage-600 text-orange-600 hover:bg-orange-600 hover:text-white-600'>Pizza</button>
           <button onClick={() => filterType('chicken')} className='m-1 border-orage-600 text-orange-600 hover:bg-orange-600 hover:text-white-600'>Chicken</button>
           <button onClick={() => filterType('salad')} className='m-1 border-orage-600 text-orange-600 hover:bg-orange-600 hover:text-white-600'>Salad</button>
           </div>
        </div>
          
        <div>
          <p className='font-bold text-gray-700'>filter price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={() => filterPrice('$')} className='m-1 border-orage-600 text-orange-600 hover:bg-orange-600 hover:text-white-600'>$</button>
            <button onClick={() => filterPrice('$$')} className='m-1 border-orage-600 text-orange-600 hover:bg-orange-600 hover:text-white-600'>$$</button>
            <button onClick={() => filterPrice('$$$')} className='m-1 border-orage-600 text-orange-600 hover:bg-orange-600 hover:text-white-600'>$$$</button>
            <button onClick={() => filterPrice('$$$$')} className='m-1 border-orage-600 text-orange-600 hover:bg-orange-600 hover:text-white-600'>$$$$</button>
         </div>
        </div>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index)=>(
          <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
             <img src={item.image} alt={item.name}
               className='w-full h-[200px] object-cover rounded-lg rounded-t-lg'
             />
             <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span> 
              </p>
             </div>
          </div>
        ) )}
      </div>

    </div>
  )
}


export default Food
