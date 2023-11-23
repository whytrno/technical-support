'use client'

import {useTheme} from "next-themes";
import {usePathname} from "next/navigation";
import {Icon} from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const DashboardSidebar = () => {
    const {theme} = useTheme()
    const pathname = usePathname()
    const sidebarItems = [
        {
            icon: 'material-symbols:dashboard-rounded',
            title: 'Dashboard',
            url: '/dashboard'
        },
        {
            icon: 'streamline:ticket-1-solid',
            title: 'Ticket',
            url: '/dashboard/tickets'
        }
    ];

    return (
        <div
            className="col-span-3 border-r-4 border-secondary flex flex-col items-center space-y-20 py-8 justify-between">
            <div className="flex flex-col gap-20 items-center w-full">
                <div className="w-28 h-16 relative">
                    <Link href={'/'}>
                        <Image
                            src={theme === 'dark' ? '/images/logo-dark.png' : '/images/logo.png'}
                            alt="Icon"
                            fill
                        />
                    </Link>
                </div>
                <div className="space-y-10 w-full">
                    <div className="flex flex-col gap-5 px-14 w-full">
                        {
                            sidebarItems.map((item, index) => {
                                let otherClass = '';
                                return (
                                    <Link
                                        href={item.url}
                                        key={index}
                                        className={`flex gap-2 items-center transition-all cursor-pointer py-3 w-full px-5 rounded-full ${item.url === pathname ? 'bg-primary text-white' : 'border-2 border-primary hover:bg-secondary'}`}>
                                        <Icon icon={item.icon}/>
                                        <p>{item.title}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="relative h-52 w-52">
                <Image
                    src={'/illustrations/hero.svg'}
                    alt="Icon"
                    fill
                />
            </div>
        </div>
    )
}

export default DashboardSidebar