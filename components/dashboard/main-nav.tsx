import Link from "next/link"

import {cn} from "@/lib/utils"
import Image from "next/image";
import {useTheme} from "next-themes";
import {usePathname} from "next/navigation";

export function MainNav({className, ...props}: React.HTMLAttributes<HTMLElement>) {
    const {theme} = useTheme()
    const pathname = usePathname()
    const navItems = [
        {
            title: 'Dashboard',
            url: '/dashboard'
        },
        {
            title: 'Tickets',
            url: '/dashboard/tickets'
        }
    ]

    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <div className="w-20 h-10 relative">
                <Link href={'/'}>
                    <Image
                        src={theme === 'dark' ? '/images/logo-dark.png' : '/images/logo.png'}
                        alt="Icon"
                        fill
                    />
                </Link>
            </div>
            {navItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.url}
                    className={`text-sm font-medium transition-colors hover:text-primary ${item.url !== pathname && 'text-muted-foreground'}`}
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    )
}