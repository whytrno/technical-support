'use client'

import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useAuth, UserButton} from "@clerk/nextjs";
import {ThemeSwitcher} from "@/components/themes/theme-switcher";
import {useTheme} from "next-themes";
import {usePathname} from 'next/navigation'

export const Navbar = () => {
    const {isSignedIn} = useAuth()
    const {theme} = useTheme()
    const pathname = usePathname()
    const navItem = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Feature',
            url: '/feature'
        },
        {
            name: 'Contact',
            url: '/contact'
        },
        {
            name: 'Create Ticket',
            url: '/create-ticket'
        },
        {
            name: 'Dashboard',
            url: '/dashboard'
        },
    ]

    return (
        <div className="px-20 flex justify-between items-center py-3 mb-5">
            <div className="w-28 h-16 relative">
                <Link href={'/'}>
                    <Image
                        src={theme === 'dark' ? '/images/logo-dark.png' : '/images/logo.png'}
                        alt="Icon"
                        fill
                    />
                </Link>
            </div>
            <div className="flex gap-10 font-semibold items-center">
                {navItem.map((item, index) => (
                    <Link key={index} href={item.url}
                          className={pathname === item.url ? 'border-b-2 border-primary' : ''}>
                        {item.name}
                    </Link>
                ))}
                <ThemeSwitcher/>
                {isSignedIn ? (
                    <UserButton afterSignOutUrl="/"/>
                ) : (
                    <Link href="sign-in">
                        <Button className="text-white">Login</Button>
                    </Link>
                )}
            </div>
        </div>
    );
};
