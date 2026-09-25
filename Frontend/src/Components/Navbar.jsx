import { useState } from 'react'
import React from 'react'
import { Menu } from 'lucide-react';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="navbar p-7 flex flex-wrap justify-between items-center">
            {/* icon and headline */}
            <div className="icon flex items-center">
                <img className='w-8 h-8 mr-2' src="https://imgs.search.brave.com/aXTVeW-VvEsGUiFg5-lbBjgLR484W5Frrc0-TqH2trE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NjI0LzgwNS9zbWFs/bC9zaG9wcGluZy1i/YWctaWNvbi1zdHls/ZS12ZWN0b3IuanBn" alt="" />
                <h2 className='text-[15px]'>Veyra - Carry It Beautifully</h2>
            </div>
            {/* navbar stuff */}
            <div className="nav ">
                <li className='gap-10 md:block hidden'>
                    <div className="list-items flex gap-5 mr-2">
                        <ul className='hover:text-blue-500 transition-colors duration-200'>Shop</ul>
                        <ul className='hover:text-blue-500 transition-colors duration-200'>Cart</ul>
                        <ul className='hover:text-blue-500 transition-colors duration-200'>My Account</ul>
                        <button className='text-red-500'>Logout </button>
                    </div>
                </li>
                {/* hamburger for mobile view for navbar */}
                <button
                    className='md:hidden'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label='Toggle navigation menu'
                    aria-expanded={isMenuOpen}
                >
                    <Menu />
                </button>
                {isMenuOpen && (
                    <div className='absolute right-7 mt-5 flex flex-col gap-3 bg-white p-4 shadow-md md:hidden'>
                        <ul className='hover:text-blue-500 transition-colors duration-200'>Shop</ul>
                        <ul className='hover:text-blue-500 transition-colors duration-200'>Cart</ul>
                        <ul className='hover:text-blue-500 transition-colors duration-200'>My Account</ul>
                        <button className='text-left text-red-500'>Logout</button>
                    </div>
                )}

            </div>
            <hr className='mt-5 w-full basis-full h-px bg-gray-300 border-0' />
        </div>
    )
}

export default Navbar