import {ThemeSwitcher} from "@/components/themes/theme-switcher";
import {UserButton} from "@clerk/nextjs";

const DashboardNavbar = () => {
    return (
        <div className="flex justify-between">
            <h1 className="text-2xl">Dashboard</h1>
            <div className="flex gap-8 items-center">
                <ThemeSwitcher/>
                <div className="flex gap-3 items-center">
                    {/*<p>Wahyu Triono</p>*/}
                    <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
        </div>
    )
}

export default DashboardNavbar