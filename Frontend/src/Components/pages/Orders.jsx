import { Handbag } from 'lucide-react';

const Orders = () => {
  return (
    <main className="min-h-screen bg-white p-4 sm:p-7">
      <h1 className="text-3xl text-black sm:text-5xl">My Orders</h1>
      <p className="mt-2 text-gray-500">Your previous orders will appear here.</p>

      <div className="container mt-5 min-h-[30rem] w-full rounded-xl border border-gray-400 p-4 text-center sm:p-5">
        <div className="center-container flex flex-col items-center justify-center">
          <div className="container mt-12 flex h-32 w-32 items-center justify-center rounded-full bg-blue-100 sm:mt-20 sm:h-50 sm:w-50">
            {/* add a bg color in the div above to add rounded div for the shop icon */}
            {/* cart icon */}
            <Handbag className='size-16 text-blue-500 sm:size-30' />
          </div>
          <h1 className='mt-5 text-3xl font-bold text-black sm:text-5xl'>No orders yet</h1>
          <p className='mt-5 max-w-2xl font-bold text-gray-500'>You haven't placed any orders. Start shopping to see your orders here!</p>

          <a href='/shop' className='mt-7 h-fit w-full max-w-xs rounded-lg bg-blue-700 p-5 text-center font-bold text-white'>Start Shopping</a>
        </div>
      </div>
    </main>
  )
}

export default Orders