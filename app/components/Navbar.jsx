'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggle = () => {
        if (theme == 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = (
        <>
            <a href="#" className="hover:bg-green-600 px-3 py-2 rounded-md min-w-24">صفحه اصلی</a>
            <a href="#" className="hover:bg-green-600 px-3 py-2 rounded-md min-w-24">داشبورد</a>
            <a href="#" className="hover:bg-green-600 px-3 py-2 rounded-md min-w-24">پارکینگ ها</a>
            <a href="#" className="hover:bg-green-600 px-3 py-2 rounded-md min-w-24">سوالات متداول</a>
            <div className="dropdown dropdown-bottom sm:dropdown-left md:dropdown-left lg:dropdown-right bg-transparent flex-inline text-lg">
                <a tabIndex={0} role="button" className="btn bg-inherit text-inherit border-none shadow-none
                hover:bg-green-600 px-3 py-2 rounded-md min-w-24">درباره تبریز پارک v</a>
                <ul tabIndex={0} className="dropdown-content menu glass bg-green-500 text-slate-50 rounded-box z-[999] w-52">
                    <li><a>درباره ما</a></li>
                    <li><a>تماس با ما</a></li>
                </ul>
            </div>
        </>
    )

    return (
        <nav dir='rtl' className={`${isOpen ? "z-50" : "z-0"} absolute top-0 left-0 w-full bg-green-400 h-60 text-slate-900 dark:text-slate-50`}>
            <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 mt-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Parke Man Logo"
                            className="invert"
                            width={150}
                            height={0}
                            priority
                        />
                        <div className="text-white font-bold text-xl">
                            تبریز پارک
                        </div>
                        <div className="relative hidden md:block z-50">
                            <div className="mr-10 flex items-baseline space-x-4 text-white text-center">
                                {menuItems}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-around items-center sm:justify-end sm:pl-2 md:w-1/6'>
                        <div className="bg-slate-50 dark:bg-slate-900 ml-2 rounded-full text-black dark:text-white w-10 h-10">
                            <button onClick={toggle} className='ease-linear duration-500 flex items-center justify-center text-center w-full h-full text-inherit p-2'>
                                {theme == 'dark' ? <MoonIcon /> : <SunIcon />}
                            </button>
                        </div>
                        <div className="md:hidden bg-slate-50 dark:bg-slate-900 ml-2 rounded-full text-black dark:text-white w-10 h-10">
                            {/* Hamburger Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className="ease-linear duration-500 flex items-center justify-center text-center w-full h-full text-inherit p-2"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-green-400`}>
                <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 text-slate-50 text-right font-medium ease-linear duration-500 ">
                    {menuItems}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
