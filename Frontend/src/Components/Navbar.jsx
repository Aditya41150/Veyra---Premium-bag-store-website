import { useState } from 'react'
import { Menu } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="navbar relative z-40 p-5 flex flex-wrap justify-between items-center">
            {/* icon and headline */}
            <a href="/shop">
                <div className="icon flex items-center">
                <img className='w-8 h-8 mr-2' src="https://imgs.search.brave.com/aXTVeW-VvEsGUiFg5-lbBjgLR484W5Frrc0-TqH2trE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NjI0LzgwNS9zbWFs/bC9zaG9wcGluZy1i/YWctaWNvbi1zdHls/ZS12ZWN0b3IuanBn" alt="" />
                <h2 className='text-xl'>Veyra - Carry It Beautifully</h2>
            </div>
            </a>
            {/* navbar stuff */}
            <div className="nav ">
                <li className='md:block hidden'>
                    <div className="list-items flex gap-10 mr-2">
                        <NavLink to="/shop" className='hover:text-blue-500 transition-colors duration-200'>Shop</NavLink>
                        <NavLink to="/cart" className='hover:text-blue-500 transition-colors duration-200'>Cart</NavLink>

                        <NavLink to="/orders" className='hover:text-blue-500 transition-colors duration-200'>Orders</NavLink>
                        <NavLink to="/my-account" className='hover:text-blue-500 transition-colors duration-200'>My Account</NavLink>
                        <button onClick={() => navigate('/signin')} className='text-red-500'>Logout</button>
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
                <div
                    aria-hidden={!isMenuOpen}
                    className={`absolute right-7 z-50 mt-5 flex max-h-60 flex-col gap-3 overflow-hidden bg-white shadow-md transition-all duration-300 ease-out md:hidden ${isMenuOpen
                            ? 'visible translate-y-0 scale-100 p-4 opacity-100'
                            : 'invisible -translate-y-2 scale-95 p-0 opacity-0 pointer-events-none'
                        }`}
                >
                    <NavLink to="/shop" onClick={() => setIsMenuOpen(false)} className='hover:text-blue-500 transition-colors duration-200'>Shop</NavLink>
                    <NavLink to="/cart" onClick={() => setIsMenuOpen(false)} className='hover:text-blue-500 transition-colors duration-200'>Cart</NavLink>
                    <NavLink to="/orders" onClick={() => setIsMenuOpen(false)} className='hover:text-blue-500 transition-colors duration-200'>Orders</NavLink>
                    <NavLink to="/my-account" onClick={() => setIsMenuOpen(false)} className='hover:text-blue-500 transition-colors duration-200'>My Account</NavLink>
                    <button onClick={() => {
                        setIsMenuOpen(false)
                        navigate('/signin')
                    }} className='text-left text-red-500'>Logout</button>
                </div>

            </div>
            <hr className='mt-5 w-full basis-full h-px bg-gray-300 border-0' />
        </div>
    )
}

export default Navbar