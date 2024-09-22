import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ projects }: PageProps) {
    const hundleDelete = (id: number) => {    
        if (confirm('Are you sure you want to delete this project?')) {
            return router.delete(route('projects.destroy', id));
        }
        return;
    }
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Projects Page</h2>}
        >
            <Head title="Projects Page" />
            <div className="flex flex-col mx-auto mt-10 p-4 bg-white container mx-auto">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                            <div className="py-3 px-4 relative">
                                <div className="relative max-w-xs w-full">
                                    <div>
                                        <label className="sr-only">Search</label>
                                        <TextInput className="ps-8" />
                                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                            <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className=" absolute inset-y-0 end-10 flex items-center ">
                                    <Link href={route('projects.create')}><PrimaryButton> Create Project</PrimaryButton></Link>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Name</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Status</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Created By</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Created at</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase"></th>

                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {projects.data.map((project) => (
                                            <tr key={project.id}>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{project.name}</td>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{project.status}</td>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{project.user.name}</td>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{project.created_at}</td>
                                                <td className="flex gap-2 items-center px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    <Link href={route('projects.edit', project.id)}>
                                                        <PrimaryButton className="bg-gray-800 hover:bg-gray-700">Edit</PrimaryButton>

                                                    </Link>
                                                    <form onSubmit={() => hundleDelete(project.id)}>
                                                        <PrimaryButton className="bg-red-700 hover:bg-red-500 ms-2">Delete</PrimaryButton>
                                                    </form>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination */}
                            <Pagination links={projects.links} />
                            {/* Pagination */}
                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
