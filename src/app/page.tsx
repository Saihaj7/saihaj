'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin } from 'lucide-react'
import Navbar from './Navbar'

export default function Home() {
  const [text, setText] = useState<string>('')
  const [binary, setBinary] = useState<JSX.Element[]>([])

  const fullText = "hey there! i am a uoft graduate who is aspiring to become a full stack developer.\n\ni am familiar with an assortment of programming languages such as JavaScript + HTML / CSS, Python, Java, C / C++. ive mainly been doing webdev outside of school using React + Next.js with Postgresql/MongoDB databases, with experience using tools such as Git, Docker, and cloud services such as Heroku, Vercel, and Supabase.\n\nrecently ive been working on projects of my own while looking for entry level positions!!"

  // Updated binaryGenerator to generate more binary digits and use flex-wrap
  const binaryGenerator = (limit: number) => {
    const fullBinary = []
    for (let i = 0; i < limit; i++) {
      const binaryDigit = Math.random() < 0.5 ? '0' : '1'
      fullBinary.push(
        <span key={i} className='leading-none hover:text-gray-300 text-gray-200 hover:duration-0 duration-[0.5s] text-xs'>{binaryDigit}</span>
      )
    }
    return fullBinary
  }

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
    setBinary(binaryGenerator(10000))  // Increased limit to fill the background

    return () => {
      i = fullText.length
    }
  }, [])


  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Binary Background */}
      <div className='fixed inset-0 z-0 w-full h-full overflow-hidden flex flex-wrap'>
        {binary}
      </div>

      {/* Content Section */}
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8 relative">
        <div className="w-3/4 mx-auto">
          <div className='pb-10'>
            <h1 className="text-3xl font-bold mb-1">
              saihaj brar
            </h1>
            <h1 className='text-xl font-semibold text-gray-700'>
              major in math/stats, minor in comp sci @ uoft 24&apos;
              <br />
            </h1>
          </div>

          <p className="whitespace-pre-wrap text-sm md:text-base">{text}<span className={`cursor`}>_</span></p>
        </div>
      </main>

      <footer className="p-4 relative z-10">
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/saihajbrar/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <Linkedin size={42} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/Saihaj7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <Github size={42} />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </footer>
    </div>
  )
}
