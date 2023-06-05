import React from 'react'
import Dp from '../Assets/dp.png'

const Card = () => {

    const list = ["afdsadf", "asfdasd", "asfdsafd", "sadfasf", "sdfasf asfdsaf"]
    return (
        <div className='w-2/3 m-auto flex flex-col items-center' >
            <div className='w-4/5 bg-[#9AE5C4] rounded-t-xl h-2' ></div>
            <div className='bg-[#E5FAF3] rounded-lg  w-full flex flex-col items-center pt-5' >
                <div>
                    <div>
                        <div className='w-32' >
                            <img src={Dp} alt="" />
                        </div>
                        <div className='text-3xl font-bold text-center text-[#26BA7B]' >
                            Free
                        </div>
                    </div>
                    <div className='text-black text-center font-sans' >
                        <div className='text-4xl font-bold' >0 UDST </div>
                        <div className='text-md font-semibold opacity-50' > per month </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg  text-black w-full pt-5 ' >
                    <div className='font-semibold font-3xl p-4' >
                        Description obout this plon this
                        could be #nyhing thot we wont
                        to disploy here
                    </div>
                    <div className='py-6' >
                        {list.map((items) => (
                            <div className="flex gap-4  opacity-70 text-xl px-4 justify-center✅" >
                                <div> ✅ </div>
                                <div>{items}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card;