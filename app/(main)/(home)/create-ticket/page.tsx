import Image from "next/image";
import CreateTicketForm from "@/components/create-ticket-form";

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
            <div className="flex flex-col py-10 px-14 2xl:px-24 items-center">
                <div className="space-y-5">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Neque odit
                            omnis sint vero! Deserunt</p>
                    </div>

                    <div className="space-y-4">
                        <CreateTicketForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTicketPage;
