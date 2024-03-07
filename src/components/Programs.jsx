import React from 'react';
import Dumbell from '../assests/dumbell.jpg'


const data=[
  {id:1,
  image:{Dumbell},
  title: 'Strength Training' ,
  describe:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus, voluptas autem consequuntur rem esse numquam asperiores quae, architecto expedita aut placeat eum sunt veniam vero culpa. Assumenda, libero rerum.'
  },
{id:2,
 image:{Dumbell},
  title: 'Basic Yoga',
  describe:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus, voluptas autem consequuntur rem esse numquam asperiores quae, architecto expedita aut placeat eum sunt veniam vero culpa. Assumenda, libero rerum.'
  },
   
{id:3,
 image:{Dumbell},
  title: 'Body Building ',
  describe:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus, voluptas autem consequuntur rem esse numquam asperiores quae, architecto expedita aut placeat eum sunt veniam vero culpa. Assumenda, libero rerum.'
  },
     
  {id:4,
    image:{Dumbell},
     title: 'Weight Loss ',
     describe:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus, voluptas autem consequuntur rem esse numquam asperiores quae, architecto expedita aut placeat eum sunt veniam vero culpa. Assumenda, libero rerum.'
     },
       
  
]





const Programs = () => {
  return (
    <div className='text-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12 '>
      <h5 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>The Best Programs We Offers For You</h5>
      <p className='mb-5 font-light  sm:text-xl text-white'>We are always there to help you to make a healthy  body and mind with our perfect exercises through the power of fitness. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati saepe repellendus odit laudantium magnam rem libero itaque modi, animi illo nostrum, tenetur earum sapiente ea eum corrupti minima hic provident.</p>
      </div>

      <div className="grid grid-cols-4 gap-10 ">
        {
          data.map(({id,image,title,describe})=>{
            return(
            <div key={id} className="border rounded-lg p-2 hover:bg-red-500">
          <div className="rounded-lg overflow-hidden flex items-center justify-center">
            <img src={image} alt={title}/>
          </div>
          <h3 className='text-xl font-bold py-5 text-center'>{title}</h3>
         <p className='text-lg font-semibold'>{describe}</p>
        </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default Programs
