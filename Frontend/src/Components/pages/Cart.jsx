import React from 'react'
import { ShoppingCart } from 'lucide-react';

const Cart = () => {
    return (
        <div className="main">
            <div className="page-header">
                <h1 className='px-4 sm:px-8 lg:px-20 text-3xl md:text-5xl'>Cart</h1>
                <p className='px-4 sm:px-8 lg:px-20 mt-2 text-sm sm:text-base text-gray-500'>Review your items and checkout</p>
            </div>

            <div className="center-container flex flex-col items-center justify-center">
                <div className="mt-20 container w-40 h-40 rounded-full  flex items-center justify-center bg-gray-50">
                    {/* add a bg color in the div above to add rounded div for the shop icon */}
                    {/* cart icon */}
                    <ShoppingCart className='size-15 text-gray-400' />
                </div>
                <div className="content flex flex-col text-center p-5">
                    <h1 className='text-3xl font-bold mt-5 text-black '>Your cart is empty</h1>
                <p className=' font-bold mt-5 text-gray-500'>Looks like you haven't added anything to your cart yet Start Shopping.</p>
                </div>

                <a href='/shop' className='mt-7 h-fit w-full max-w-xs rounded-lg bg-blue-700 p-5 text-center font-bold text-white'>Start Shopping</a>
            </div>

        </div>

    )
}

export default Cart