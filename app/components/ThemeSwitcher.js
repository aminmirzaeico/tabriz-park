'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid'

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
``
	const toggle = () => {
		if (theme == 'dark') {
			setTheme('light')
		} else {
			setTheme('dark')
		}
	}

	return (
		<div className="bg-slate-50 dark:bg-slate-900  rounded-full text-black dark:text-white fixed top-5 sm:top-10 right-5 sm:right-10 w-10 h-10">
			<button onClick={toggle} className='ease-linear duration-500 flex items-center justify-center text-center w-full h-full text-inherit p-2'>
				{theme == 'dark' ? <MoonIcon /> : <SunIcon />}
			</button>
		</div>
	);
};

export default ThemeSwitcher;
