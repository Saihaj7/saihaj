
'use client'
import Navbar from "../Navbar";
import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Projects() {
    //const [text, setText] = useState<string>('')
    const [binary, setBinary] = useState<JSX.Element[]>([])
    const spanSize = 10 // Size of each span in pixels
    //const fullText = "hey there! i am a uoft graduate who is aspiring to become a full stack developer.\n\ni am familiar with an assortment of programming languages such as JavaScript + HTML / CSS, Python, Java, C / C++. ive mainly been doing webdev outside of school using React + Next.js with Postgresql/MongoDB databases, with experience using tools such as Git, Docker, and cloud services such as Heroku, Vercel, and Supabase.\n\nive been working on projects of my own while looking for entry level positions!!"

    // Updated binaryGenerator to generate more binary digits and use flex-wrap
    const binaryGenerator = (rows: number, columns: number) => {
        const fullBinary = []
        const totalSpans = rows * columns
        for (let i = 0; i < totalSpans; i++) {
            const binaryDigit = Math.random() < 0.5 ? '0' : '1'
            fullBinary.push(
                <span key={i} className='flex-none leading-none hover:text-gray-400 text-gray-200 hover:duration-0 duration-[0.5s] text-xs' style={{ width: spanSize - 2, height: spanSize }}>
                    {binaryDigit}
                </span>
            )
        }
        return fullBinary
    }

    const calculateSpans = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        const columns = Math.floor(width / spanSize)
        const rows = Math.floor(height / spanSize)
        return binaryGenerator(rows, columns)
    }
    useEffect(() => {
        const handleResize = () => {
            setBinary(calculateSpans())
        }

        // Initial calculation
        setBinary(calculateSpans())

        // Recalculate on window resize
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <div className="min-h-screen flex flex-col relative">
            <main className="flex-grow container mx-auto z-50">

                {/* Binary Background */}
                <div className='fixed inset-0 flex flex-wrap select-none flex-shrink'>
                    {binary}
                </div>


                <Navbar />

                <div className="w-3/4 mx-auto relative mt-28  p-3"   >
                    coming soon!
                </div>

            </main>

            <footer className="p-4 relative z-50">
                <div className="flex justify-center space-x-4">
                    <a href="https://www.linkedin.com/in/saihajbrar/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <Linkedin size={42} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="https://github.com/Saihaj7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <Github size={42} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="mailto:jahias17@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <Mail size={42} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </footer>
        </div>
    )
}
