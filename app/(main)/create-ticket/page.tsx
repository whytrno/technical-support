import Image from "next/image";
import {Button} from "@/components/ui/button";

const CreateTicketPage = () => {
    return (
        <div className="grid grid-cols-2 h-full">
            <div className="relative w-full h-full">
                <Image
                    src='/images/ticket.png'
                    alt='/ticket'
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col py-10 px-14 items-center">
                <div className="space-y-5 overflow-y-auto">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit.</h1>
                        <p className="font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Neque odit
                            omnis sint vero! Deserunt</p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <p>Title</p>
                            <input type="text" className="py-2 px-4 rounded-lg w-full border-2"/>
                        </div>
                        <div className="space-y-1">
                            <p>Detail</p>
                            <textarea rows={5} className="py-2 px-4 rounded-lg w-full border-2"></textarea>
                        </div>
                        <div className="space-y-1">
                            <p>First Name</p>
                            <div
                                className="cursor-pointer hover:text-primary hover:border-primary hover:fill-primary flex flex-col items-center rounded-[12px] py-8 justyfy-center border-2 text-gray-300 fill-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-16 h-16">
                                    <path fillRule="evenodd"
                                          d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                                          clipRule="evenodd"/>
                                </svg>
                                <p className="font-semibold">Lampirkan file Anda di sini
                                    atau jelajahi file</p>
                            </div>
                            <p className="text-sm font-thin text-slate-400">(test.png, test2.png, test2.png,
                                test2.png)</p>
                            <input type="file" className="hidden"/>
                        </div>

                        <Button size={"lg"} className="w-full block">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTicketPage;
