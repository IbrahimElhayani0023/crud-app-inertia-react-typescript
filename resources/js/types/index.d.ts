export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    created_at: string;
}
export interface Link {
    url?: string;
    label: string;
    active: boolean;
}
export interface Project {
    id: number;
    name: string;
    status: string;
    description: string;
    created_by: string;
    created_at: string;
    user: User;
}
export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    users: {
        data: User[];
        links: Link[];
    };
    user: User;
    projects: {
        data: Project[];
        links: Link[];
    };
    project: Project;
};
