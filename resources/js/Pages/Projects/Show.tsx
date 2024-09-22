import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Show({ project }: PageProps) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Show Project</h2>}
        >
            <Head title="Show Project" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div id="name" className="my-5 p-2 text-2xl underline text-center">{project.name}</div>
                            <div>
                                <label htmlFor="description"></label>
                                <div id="description" className="bg-gray-200 p-2">{project.description}</div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <label htmlFor="status"></label>
                                <div id="status" className="bg-gray-200 p-2">{project.status}</div>
                                <label htmlFor="created_by"></label>
                                <div id="created_by" className="bg-gray-200 p-2">{project.created_by}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}