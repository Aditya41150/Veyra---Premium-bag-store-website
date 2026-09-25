import React, { useState } from 'react'
import Navbar from '../Navbar';
import { ArrowDownWideNarrow, SquareLibrary, Star, Menu, Tag, Funnel } from 'lucide-react';

const ShopPage = () => {

    return (
        // NAVBAR
        <div className="main">
            <Navbar />
            <div className="page-header">
                <h1 className='ml-7 text-2xl md:text-5xl'>Shop</h1>
                <p className='ml-7 mt-2 text-gray-500'>Discover out latest collection of products</p>
            </div>
            {/* Main page content */}
            <div className="container-main mt-4 flex gap-2 ml-7">
                {/* TODO:left side 1)Sort(DONE), 2)Collections(DONE) 3)Filters */}
                <div className="right border border-gray-300 rounded-2xl w-80 h-auto p-5">
                    <div className="sort-section">
                        <span className='flex gap-x-3'>
                            <ArrowDownWideNarrow className='size-5 text-blue-500' />
                            <p>Sort By</p>
                        </span>
                        <select name="sortby" class="mt-5 w-full px-2 md:px-4 py-2 md:py-3 text-xs md:text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all cursor-pointer bg-gray-50 hover:bg-white ">
                            <option value="popular">Popular</option>
                            <option value="newest">Newest</option>
                            <option value="price-low">Low to High</option>
                            <option value="price-high">High to Low</option>
                        </select>
                    </div>
                    <hr className='border-gray-300 mt-5' />

                    <div className="Collections-section mt-5">
                        <span className='flex gap-x-3'>
                            <SquareLibrary className='size-5 text-blue-500' />
                            <p >Collections</p>
                        </span>
                        <div className='mt-4'>

                            <a href="/shop?collection=new" class="flex items-center gap-2  px-2 md:px-4 py-2 md:py-3 text-xs md:text-base rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all text-gray-700 font-medium">
                                <Star className='size-5' />  <span class="hidden sm:inline" >New Collection</span><span class="sm:hidden">New</span>
                            </a>
                            <a href="/shop?collection=new" class="flex items-center gap-2  px-2 md:px-4 py-2 md:py-3 text-xs md:text-base rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all text-gray-700 font-medium">
                                <Menu className='size-5' />  <span class="hidden sm:inline" >All Products</span><span class="sm:hidden">New</span>
                            </a>
                            <a href="/shop?collection=new" class="flex items-center gap-2  px-2 md:px-4 py-2 md:py-3 text-xs md:text-base rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all text-gray-700 font-medium">
                                <Tag className='size-5' />  <span class="hidden sm:inline" >On Discount</span><span class="sm:hidden">New</span>
                            </a>




                        </div>

                    </div>
                    <hr className='border-gray-300 mt-5' />
                    <div className="filters-section mt-5">
                        <span className='flex gap-x-3'>
                            <Funnel className='size-5 text-blue-500 mb-5' />
                            <p >Filters</p>
                        </span>


                        <label className="flex items-center gap-2 md:gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <input type="checkbox" className="w-4 h-4 md:w-5 md:h-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
                            <span className="text-xs md:text-base text-gray-700 group-hover:text-blue-600 transition-colors font-medium">In Stock</span>
                        </label>

                        <label className="flex items-center gap-2 md:gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <input type="checkbox" className="w-4 h-4 md:w-5 md:h-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
                            <span className="text-xs md:text-base text-gray-700 group-hover:text-blue-600 transition-colors font-medium">On Sale</span>
                        </label>

                        <label className="flex items-center gap-2 md:gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <input type="checkbox" className="w-4 h-4 md:w-5 md:h-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
                            <span className="text-xs md:text-base text-gray-700 group-hover:text-blue-600 transition-colors font-medium">Free Shipping</span>
                        </label>

                    </div>

                </div>


                {/* Right Section Show Proudts -> Grid Layout */}

            </div>


        </div>



    )
}

export default ShopPage