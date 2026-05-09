import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='flex justify-between p-4 bg-white'>
            <ul className='flex gap-2'>
                <li className='font-bold'><Link href="/">Home</Link></li>
                <li className='font-bold'><Link href="/destination">Destinations</Link></li>
                <li className='font-bold'><Link href="/my-bookings">My Bookings</Link></li>
            </ul>
            <div>
                <Image src={'/assets/Wanderlast.png'} alt="Logo" width={150} height={150} />
            </div>
            <ul className='flex gap-3'>
                <li className='font-bold'><Link href="/profile">
                {/* <FaRegUser /> */}
                Profile</Link></li>
                <li className='font-bold'><Link href="/login">Login</Link></li>
                <li className='font-bold'><Link href="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;