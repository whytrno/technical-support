import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-cols-2 gap-10 h-full">
            <div className="flex h-full w-full items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold">Technical Support Apps</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam assumenda commodi dicta
                            doloribus ea, error excepturi itaque minus officia, perferendis quaerat quibusdam quo
                            repudiandae
                            rerum sed sunt ut, voluptatem?</p>
                    </div>
                    <Button size={"lg"} className="text-white">Our Services</Button>
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
