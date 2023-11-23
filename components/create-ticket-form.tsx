'use client'

import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

const formSchema = z.object({
    title: z.string().min(3),
    detail: z.string().min(10),
    files: z.array(z.object({
        file: z.any(), // Accept any file type, you might want to add specific validation based on your needs
        // Add additional validation properties as needed
    })),
})

const CreateTicketForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            detail: "",
            files: [],
        },
    })

    function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const files = event.target.files;
        if (files) {
            const existingFiles = form.getValues("files");
            const newFiles = Array.from(files).map(file => ({file}));
            const updatedFiles = [...existingFiles, ...newFiles];
            form.setValue("files", updatedFiles);
        }
    }

    const handleRemoveFile = (index: number) => {
        const currentFiles = form.getValues("files");
        const updatedFiles = [...currentFiles.slice(0, index), ...currentFiles.slice(index + 1)];
        form.setValue("files", updatedFiles);
    };


    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="detail"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Detail</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Detail"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="files"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>File</FormLabel>
                            <div
                                className="flex flex-col items-center rounded-[12px] justyfy-center hover:text-primary hover:border-primary hover:fill-primary border-2 text-gray-300 fill-gray-300 transition-all">
                                <label
                                    htmlFor="fileInput"
                                    className="cursor-pointer flex flex-col items-center w-full h-full py-8"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="w-16 h-16">
                                        <path fillRule="evenodd"
                                              d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <p className="font-semibold">Lampirkan file Anda di sini atau jelajahi file</p>
                                </label>
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    className="hidden"
                                    onChange={onFileChange}
                                />
                            </div>
                            <FormMessage/>
                            <ul className="mt-2">
                                {field.value.map((file, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span className="text-sm text-slate-400">{file.file.name}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFile(index)}
                                            className="text-red-500 hover:text-red-700 text-sm"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default CreateTicketForm;
