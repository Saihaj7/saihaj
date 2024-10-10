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

    /*
        useEffect(() => {
            let i = 0
            const typingEffect = () => {
                if (i < fullText.length) {
                    setText(fullText.slice(0, i + 1))
                    i++
                    setTimeout(typingEffect, 10)
                }
            }
            typingEffect()
    
            const handleResize = () => {
                setBinary(calculateSpans())
            }
    
            // Initial calculation
            setBinary(calculateSpans())
    
            // Recalculate on window resize
            window.addEventListener('resize', handleResize)
    
            return () => {
                i = fullText.length
                window.removeEventListener('resize', handleResize)
            }
        }, [])
    */


    return (
        <>
            <div className="min-h-screen flex flex-col relative">

                <div className=" flex-grow container mx-auto z-50 self-center ">
                    <Navbar />
                </div>
                <main className="flex-grow container mx-auto z-30 ">

                    {/* Binary Background */}
                    <div className='fixed inset-0 flex flex-wrap select-none flex-shrink'>
                        {binary}
                    </div>

                    <div className="w-3/4 mx-auto relative py-10 flex flex-col space-y-10">
                        <a href="https://musicdrop.vercel.app" className="shadow-md rounded-lg p-3 w-full border-gray-800 border-2 bg-[#F5F5F5] transition-all transform hover:scale-105 duration-300 ">
                            <h1 className="text-3xl font-bold mb-1">
                                MusicDrop
                            </h1>
                            <h1 className='text-xl font-semibold text-gray-700'>
                                a song dropbox created for Spotify.
                            </h1>
                            <p className="pt-2">
                                React, Next.js, Node.js, Postgresql, TailwindCSS, Vercel, Git, Spotify API
                            </p>
                        </a>

                        <a href="https://github.com/Saihaj7/CHATR" className="shadow-md rounded-lg p-3 w-full border-gray-800 border-2  bg-[#F5F5F5] transition-all transform hover:scale-105 duration-300">
                            <h1 className="text-3xl font-bold mb-1">
                                CHATR
                            </h1>
                            <h1 className='text-xl font-semibold text-gray-700'>
                                live text messenger.
                            </h1>
                            <p className="pt-2">
                                React, Express.js, Node.js, Sockets.io, Axios, MongoDB
                            </p>
                        </a>

                        <a href="https://github.com/JerryLin1/csc301-project" className="shadow-md rounded-lg p-3 w-full border-gray-800 border-2 bg-[#F5F5F5]  transition-all transform hover:scale-105 duration-300">
                            <h1 className="text-3xl font-bold mb-1">
                                Symposium
                            </h1>
                            <h1 className='text-xl font-semibold text-gray-700'>
                                education platform
                            </h1>
                            <p className="pt-2">
                                React, Python, Postgresql, MaterialUI, FastAPI, Docker, Git
                            </p>
                        </a>
                        <a href="https://github.com/Saihaj7/HockeyBot" className="shadow-md rounded-lg p-3 w-full border-gray-800 border-2  bg-[#F5F5F5] transition-all transform hover:scale-105 duration-300">
                            <h1 className="text-3xl font-bold mb-1">
                                HockeyBot
                            </h1>
                            <h1 className='text-xl font-semibold text-gray-700'>
                                a Discord bot that simulates live hockey games.
                            </h1>
                            <p className="pt-2">
                                Python, Heroku Cloud, Discord API
                            </p>
                        </a>
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
        </>
    );
}
