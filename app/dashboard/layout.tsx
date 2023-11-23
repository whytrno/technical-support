'use client'

import React from "react";
import {MainNav} from "@/components/dashboard/main-nav";
import {ThemeSwitcher} from "@/components/themes/theme-switcher";
import {UserNav} from "@/components/dashboard/user-nav";

const DashboardLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="hidden flex-col md:flex">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <MainNav className="mx-6"/>
                    <div className="ml-auto flex items-center space-x-4">
                        <ThemeSwitcher/>
                        <UserNav/>
                    </div>
                </div>
            </div>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
                </div>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout