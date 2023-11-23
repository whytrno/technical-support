import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="px-20 grid grid-cols-2 gap-9 h-full">
            <div className="flex h-full w-full items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold">Technical Support Apps</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam assumenda commodi dicta
                            doloribus ea, error excepturi itaque minus officia, perferendis quaerat quibusdam quo
                            repudiandae
                            rerum sed sunt ut, voluptatem?</p>
                    </div>
                    <Link href='/create-ticket' className="block">
                        <Button size={"lg"} className="text-white">
                            Create Ticket
                        </Button>
                    </Link>
                </div>
            </div>
            <div>
                <div className="h-full w-full relative">
                    <Image
                        src={'/illustrations/hero.svg'}
                        alt="Icon"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}
