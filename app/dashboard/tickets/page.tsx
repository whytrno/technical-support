import {promises as fs} from "fs"
import path from "path"
import {Metadata} from "next"
import {z} from "zod"
import {DataTable} from "@/components/dashboard/tickets/table/data-table";
import {columns} from "@/components/dashboard/tickets/table/column";
import {taskSchema} from "@/components/dashboard/tickets/table/data/schema";


export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
    const data = await fs.readFile(
        path.join(process.cwd(), "./components/dashboard/tickets/table/data/tasks.json")
    )

    const tasks = JSON.parse(data.toString())

    return z.array(taskSchema).parse(tasks)
}

export default async function TaskPage() {
    const tasks = await getTasks()

    return (
        <DataTable data={tasks} columns={columns}/>
    )
}