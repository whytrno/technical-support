import {Navbar} from "@/components/navbar";
import React from "react";

const MainLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar/>
            {children}
        </div>
    )
}

export default MainLayout