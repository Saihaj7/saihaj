'use client'

import { useState, useEffect } from 'react'
//import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from 'lucide-react'
import Navbar from './Navbar'

export default function Home() {

  //BACKGROUND OF 010101010101010101010 WITH ON HOVER LIKE THAT REFERENCE
  const [text, setText] = useState('')
  //const fullText = "hi there!! i'm an aspiring full stack dev familiar with programming languages such as JavaScript + HTML / CSS, Python, Java, C / C++. i've mainly been doing webdev outside of school using React + Next.js with Postgresql/MongoDB databases. i am currently building MusicDrop and awaiting Spotify's approval for production level API access.i am currently looking for an entry level dev position!"

  //const fullText = "hey there! welcome to my personal page. \n\ni'm a UofT graduate who is aspiring to become a full stack dev fimiliar with an assortment of programming languages such as JavaScript + HTML/CSS, Python, Java, C/C++. i've mainly been doing webdev outside of school using React + Next.js with Postgresql/MongoDB databases.\n\nthe job search has "

  const fullText = "hey there! i'm a uoft graduate who is aspiring to become a full stack developer.\n\ni’m familiar with an assortment of programming languages such as JavaScript + HTML / CSS, Python, Java, C / C++. i've mainly been doing webdev outside of school using React + Next.js with Postgresql/MongoDB databases, with experience using tools such as Git, Docker, and cloud services such as Heroku, Vercel, and Supabase.\n\nrecently i’ve been working on projects of my own while looking for entry level positions!!"
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

    return () => {
      i = fullText.length
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">

        <div className="w-3/4 mx-auto">

          <div className=' pb-10'>
            <h1 className="text-3xl font-bold mb-1">
              saihaj brar
            </h1>
            <h1 className='text-xl font-semibold text-gray-700'>
              major in math/stats, minor in comp sci @ uoft 24'
              <br />
            </h1>
          </div>
          {/*
          <h1 className='font-semibold pl-4 pb-2'>
            about me
          </h1>
           */}
          <p className="whitespace-pre-wrap text-sm md:text-base">{text}<span className={`cursor`}>_</span></p>
          <br />
          {/* 
          <h1 className='font-semibold pl-4 pb-2'>
            what am i up to?
          </h1>
          <p>
            
            I am currently building <Link className="bg-black/30 hover:bg-black/50 transition-colors" href="https://musicdrop.vercel.app">MusicDrop</Link>,
            a public song submission dropbox created for Spotify users using their developer API
            along with React’s Next.js framework and Supabase’s postgresql database. Users can
            display their MusicDrop share links across social media and let their followers
            (who are also Spotify users) to send them songs with an optional message, then, with
            the click of a button the recipient can push the submissions into a playlist on
            their account to listen with ease. MusicDrop is currently awaiting approval
            from Spotify for full production API access. For more information check out
            my new blog section! 
          </p>
*/}
        </div>
      </main>

      <footer className="p-4">
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