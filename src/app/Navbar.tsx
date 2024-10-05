'use client'

import Link from "next/link";
//import { useRouter } from "next/navigation";


export default function Navbar() {
    //const router = useRouter();

    return (
        <>
            <header className="p-4 ">
                <nav className="flex justify-center space-x-4">
                    <div className='mr-auto' />
                    <Link href="/" className="text-gray-800 hover:text-gray-600">main</Link>
                    <Link href="/blog" className="text-gray-800 hover:text-gray-600">blog</Link>
                    <Link href="/projects" className="text-gray-800 hover:text-gray-600">projects</Link>
                    <Link href="/contact" className="text-gray-800 hover:text-gray-600">contact</Link>
                </nav>
            </header>
        </>
    )
}