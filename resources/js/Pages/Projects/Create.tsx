import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { PageProps } from '@/types';
export default function Create({ auth }: PageProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        status: '',
        created_by: auth.user.id,
    });

    const submit = (e: any) => {
        e.preventDefault();
        post(route('projects.store'));
    }
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create New Project</h2>}
        >
            <Head title="Create Project" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg relative">
                        <Link href={route('projects.index')} className="absolute top-4 right-9 text-blue-500 font-semibold hover:underline hover:text-blue-700">
                            Back to User Table
                        </Link>
                        <form className="p-9 bg-white border-b border-gray-200" onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="description" value="Description" />

                                <TextInput
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    className="mt-1 block w-full"
                                    autoComplete="description"
                                    onChange={(e) => setData('description', e.target.value)}
                                    required
                                />

                                <InputError message={errors.description} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password" />

                                <select id="status" name="status" value={data.status} className="mt-1 block w-full" onChange={(e) => setData('status', e.target.value)}>
                                    <option value="">Status</option>
                                    <option value="pending">pending</option>
                                    <option value="in_progress">in progress</option>
                                    <option value="completed">completed</option>
                                </select>

                                <InputError message={errors.status} className="mt-2" />
                            </div>
                            <PrimaryButton className="m-4 w-1/4 float-right flex justify-center" disabled={processing}>
                                Crate project
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
