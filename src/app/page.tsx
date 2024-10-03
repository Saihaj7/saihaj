'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from 'lucide-react'

export default function Home() {
  const [text, setText] = useState('')
  const fullText = `hii there!! i'm an aspiring full stack dev familiar with programming languages such as JavaScript + HTML/CSS, Python, Java, C/C++. i've mainly been doing webdev outside of school using React + Next.js with Postgresql/MongoDB databases.

i am currently building MusicDrop and awaiting Spotify's approval for production level API access.

i am currently looking for an entry level dev position!`

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(prevText => prevText + fullText.charAt(i))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 40)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-gray-100">
        <nav className="flex justify-center space-x-4">
          <div className='mr-auto' />
          <Link href="/" className="text-gray-800 hover:text-gray-600">main</Link>
          <Link href="/blog" className="text-gray-800 hover:text-gray-600">blog</Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">projects</Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">contact</Link>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="w-3/4 mx-auto">
          <h1 className="text-2xl font-bold mb-4">
            saihaj brar
            <br />
            toronto, ca
          </h1>
          <br />
          <p className="whitespace-pre-wrap">{text}<span className={`${text?.length % 2 == 0 ? 'inline' : 'hidden'}`}>_</span></p>
          <br />
          {/* 
          <p>
            i am currently building <Link className="bg-black/30 hover:bg-black/50 transition-colors" href="https://musicdrop.vercel.app">MusicDrop</Link> and
            awaiting Spotify's approval for production level API access.
          </p>
          */}
        </div>
      </main>

      <footer className="p-4 bg-gray-100">
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/saihajbrar/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/Saihaj7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </footer>
    </div>
  )
}