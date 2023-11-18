'use client'

import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useAuth, UserButton} from "@clerk/nextjs";
import {ThemeSwitcher} from "@/components/themes/theme-switcher";
import {useTheme} from "next-themes";

export const Navbar = () => {
    const {isSignedIn} = useAuth()
    const {theme} = useTheme()

    return (
        <nav className="flex justify-between items-center py-3 mb-5">
            <div className="w-28 h-16 relative">
                <Image
                    src={theme === 'dark' ? '/images/logo-dark.png' : '/images/logo.png'}
                    alt="Icon"
                    fill
                />
            </div>
            <div className="flex gap-10 font-semibold items-center">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Feature</a>
                <a href="#">Contact</a>
                <ThemeSwitcher/>
                {isSignedIn ? (
                    <UserButton afterSignOutUrl="/"/>
                ) : (
                    <Link href="sign-in">
                        <Button className="text-white">Login</Button>
                    </Link>
                )}
            </div>
        </nav>
    );
};
