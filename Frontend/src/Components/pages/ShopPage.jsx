import { ArrowDownWideNarrow, SquareLibrary, Star, Menu, Tag, Funnel,Handbag  } from 'lucide-react';

const ShopPage = () => {

    return (
        // NAVBAR
        <div className="main">
            <div className="page-header">
                <h1 className='px-4 sm:px-8 lg:px-20 text-3xl md:text-5xl'>Shop</h1>
                <p className='px-4 sm:px-8 lg:px-20 mt-2 text-sm sm:text-base text-gray-500'>Discover out latest collection of products</p>
            </div>
            {/* Main page content */}
            <div className="container-main mt-4 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row gap-5 items-stretch lg:items-start">
                {/* TODO:left side 1)Sort(DONE), 2)Collections(DONE) 3)Filters(DONE) */}
                <div className="right w-full lg:w-64 xl:w-72 shrink-0 border shadow-lg border-gray-100 rounded-2xl h-auto p-3 md:p-6 lg:sticky lg:top-8">
                    <div className="sort-section">
                        <span className='flex gap-x-3 items-center'>
                            <ArrowDownWideNarrow className='size-5 text-blue-500' />
                            <p>Sort By</p>
                        </span>
                        <select className="sortby mt-5 w-full px-2 md:px-4 py-2 md:py-3 text-xs md:text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all cursor-pointer bg-gray-50 hover:bg-white">
                            <option value="popular">Popular</option>
                            <option value="newest">Newest</option>
                            <option value="price-low">Low to High</option>
                            <option value="price-high">High to Low</option>
                        </select>
                    </div>
                    <hr className='border-gray-300 mt-5' />

                    <div className="Collections-section mt-5">
                        <span className='flex gap-x-3 items-center'>
                            <SquareLibrary className='size-5 text-blue-500' />
                            <p >Collections</p>
                        </span>
                        <div className='mt-4'>

                            <a href="/shop?collection=new" className="flex items-center gap-2 px-2 md:px-4 py-2 md:py-3 text-xs md:text-base rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all text-gray-700 font-medium">
                                <Star className='size-5 shrink-0' />  <span className="hidden sm:inline" >New Collection</span><span className="sm:hidden">New</span>
                            </a>
                            <a href="/shop?collection=new" className="flex items-center gap-2 px-2 md:px-4 py-2 md:py-3 text-xs md:text-base rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all text-gray-700 font-medium">
                                <Menu className='size-5 shrink-0' />  <span className="hidden sm:inline" >All Products</span><span className="sm:hidden">All</span>
                            </a>
                            <a href="/shop?collection=new" className="flex items-center gap-2 px-2 md:px-4 py-2 md:py-3 text-xs md:text-base rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all text-gray-700 font-medium">
                                <Tag className='size-5 shrink-0' />  <span className="hidden sm:inline" >On Discount</span><span className="sm:hidden">Sale</span>
                            </a>
                        </div>

                    </div>
                    <hr className='border-gray-300 mt-5' />
                    <div className="filters-section mt-5">
                        <span className='flex gap-x-3 '>
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
                <div className="right-section w-full min-w-0">
                    <div className="w-full min-h-80 p-5 sm:p-10 flex flex-col text-center items-center justify-center py-16 md:py-32 bg-white rounded-2xl shadow-md border border-gray-200">
                        {/* SHOP ICON ->  blue */}
                        <Handbag className='size-15 text-blue-400'/>
                         <h1 className='text-xl sm:text-2xl font-bold mb-5 mt-8'>No Products Found</h1>
                        <p className='max-w-lg text-sm sm:text-[15px] text-gray-500'>We couldn't find any products matching your criteria. Try adjusting your filters.</p>

                        
                    </div>
                </div>


            </div>


        </div>



    )
}

export default ShopPage