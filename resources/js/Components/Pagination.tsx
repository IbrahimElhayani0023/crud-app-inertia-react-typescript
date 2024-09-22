import { PageProps } from "@/types"
import { Link } from "@inertiajs/react"
function Pagination({ links }: { links: PageProps["users"]["links"] }) {
    return (
        <nav>
            {links.map(link => {
                return link.url ? (
                    <Link
                        href={link.url}
                        className={`${link.active
                            ? 'z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                            }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        key={link.label}
                    >
                    </Link>
                ) : (
                    <span
                        key={link.label}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className="'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'">

                    </span>
                )
            })}
        </nav>
    )
}

export default Pagination