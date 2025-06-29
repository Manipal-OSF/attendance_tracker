"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { NAVBAR_ITEMS } from '@/utils/utils';

const FadeIn = ({ children, delay = 0, className, ...props }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ delay, type: 'tween', duration: 0.4, ease: 'easeOut' }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);

const SlideIn = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: -15, filter: 'blur(5px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay, type: 'tween', duration: 0.4, ease: 'easeOut' }}
    >
        {children}
    </motion.div>
);

const NavItem = ({ route, label, icon, isActive, index }) => (
    <SlideIn delay={index * 0.07}>
        <Link
            href={route}
            className={`flex items-center gap-x-1.5 text-sm font-outfit tracking-wider uppercase ${isActive ? 'text-white' : 'text-white/60 hover:text-white'} cursor-pointer`}
        >
            <span>{icon}</span>

            <span className='relative group'>
                {label}
                <span
                    className="absolute left-0 right-0 -bottom-1 h-[1.5px] bg-white 
                    rounded-full opacity-0 scale-x-0 group-hover:opacity-100 
                    group-hover:scale-x-100 transition-transform duration-300 origin-center"
                />
            </span>
        </Link>
    </SlideIn>
);

const AuthSection = ({ user }) => {
    const [isHovered, setIsHovered] = useState(false);

    if (user) {
        // Backend needs to fetch user data to determine if the user has a profile picture
        // For now, we have a placeholder image
        // Replace with actual user profile picture URL when available
        return (
            <Link href="/profile" className="relative top-0.5 h-11 w-11 overflow-hidden">
                <img src="/user_icon.png" alt="User Profile" className="scale-[1.8] object-contain" />
            </Link>
        );
    }

    return (
        <div className='hidden md:flex items-center h-10 bg-secondary/45 backdrop-blur-md rounded-[14px] text-gray-300'>
            <FadeIn whileHover={{ textShadow: '0px 0px 7px rgba(255,255,255,0.5)' }}>
                <Link href={'/auth/login'} className="px-3 py-2 font-jetbrains-mono">
                    Log In
                </Link>
            </FadeIn>
            <div
                className="flex items-center group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: isHovered ? 0 : 1, opacity: isHovered ? 0 : 1 }}
                    transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                    className="h-5 w-[1px] bg-white/10 mr-1 origin-center"
                />
                <FadeIn>
                    <Link
                        href="/auth/register"
                        className="px-3.5 py-2 h-10 flex overflow-visible rounded-[14px] group-hover:bg-black transition-all"
                    >
                        <span className="text-base font-jetbrains-mono font-bold group-hover:text-white transition-all">
                            Get Started
                        </span>
                    </Link>
                </FadeIn>
            </div>
        </div>
    );
};

const Navbar = () => {
    const pathname = usePathname();
    const user = false; // Replace with actual user state management

    return (
        <nav className='fixed w-full py-6 px-20 z-50'>
            <div className="flex items-center justify-between">
                <FadeIn className='flex-1 flex font-geist-mono tracking-wider'>
                    <Link
                        href={'/'}
                        className='flex items-center gap-x-4 bg-secondary/45 rounded-[14px] py-2 px-4 backdrop-blur-md'
                    >
                        <img src="/logo.png" alt="OSF Logo" className='h-10' />
                        <div className='text-accent font-medium text-xl'>
                            Manipal OSF
                        </div>
                    </Link>
                </FadeIn>

                <div className='hidden md:flex justify-center bg-secondary/45 rounded-[14px] py-2.5 px-4 backdrop-blur-md'>
                    <ul className='flex gap-x-10 items-center'>
                        {NAVBAR_ITEMS.map(({ route, label, icon }, index) => (
                            <li key={label}>
                                <NavItem
                                    route={route}
                                    label={label}
                                    icon={icon}
                                    isActive={pathname === route}
                                    index={index}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 flex justify-end">
                    <AuthSection user={user} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;