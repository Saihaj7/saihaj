
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

                <div className="w-3/4 mx-auto relative mt-5  p-3"   >
                    <div className="shadow-md rounded-lg p-3 w-full border-gray-800 border-2 bg-[#F5F5F5]  ">
                        <h1 className="text-3xl font-bold mb-1">
                            Building MusicDrop
                        </h1>
                        <h1 className='text-xl font-semibold text-gray-700'>
                            oct 17, 2024
                        </h1>
                        <p className="pt-5">
                            The idea for MusicDrop came to me when I realized how often I wanted to send friends music across social media. Sometimes this desire spilled over toward people online who I was mutuals with.
                        </p>
                        <p className="pt-5">
                            As far as I could tell, broadcasting your taste in music is commonplace everywhere. On Instagram I’d see friends post music in their stories or notes. On Twitter/X I’d see people post Spotify links with no further context. Just about every post on TikTok included music with fans congregating in comment sections.  I had even shared songs with a Twitter mutual of mine based on songs they had tweeted previously because I realized they shared similar tastes.
                        </p>
                        <p className="pt-5">
                            Having seen CuriousCat do well as an anonymous “ask me anything” application that integrated with other social media platforms, it made sense to me that there was a sort of niche to be filled. There could very well be a demand for a music dropbox where your followers on say Twitter/X could submit music you may like based on the tastes you may have broadcasted online from what you have posted previously.
                        </p>
                        <p className="pt-5">
                            Having graduated and having no luck at finding an entry level full stack position I took a break from applying and decided MusicDrop would be what I’d work on in the meantime. Having basically self taught web dev on my own outside of my classes I figured I’d take it a step further and try and bring this idea to fruition, not just as a way to beef up my portfolio but in the hopes of actually amassing a user base.
                        </p>
                        <p className="pt-5">
                            I already knew and used React and had experience building simple full stack applications previously but wanted to take it a step further and try to develop experience with tools I would use to create a solo project that can handle users, thus I decided to use the Next.js framework and Supabase’s postgresql database.
                        </p>
                        <p className="pt-5">
                            Then I got to work. At its most basic I had already decided how I wanted it to be used. I wanted users to have a personal page where they can handle submissions they received plus customization options and a public share page which allowed users to submit songs with an optional message and whose URL they’d display on social media, whether that is directly on their profile or within some kind of social media link consolidator such as Linktree.
                        </p>
                        <p className="pt-5">
                            Figuring out what I wanted to have on these pages was overwhelming at first so I started breaking it down from the highest level of abstraction on down. For example, I started by deciding that the personal page would have their playlist contents, user information, and buttons that allowed them to make changes to submissions. And then more granularly, I decided what the playlist contents would contain: album picture, song/artist name, etc.
                        </p>
                        <p className="pt-5">
                            Having done this for each feature, I started work on the functionality.
                        </p>
                        <p className="pt-5">
                            I wanted to store the bare minimum in my database and really offload a lot of the burden to Spotify, so I didn't store much more than track ids or user ids and requested more information from Spotify using those id’s when required. When that burden grew too large I turned to caching and memoization to keep things light. Unluckily for me, Next.js makes caching insanely annoying to wrap your head around as a beginner and also caches everything by default, which gave me many headaches when my GET route handlers would return outdated information from the database instead of revalidating by default.
                        </p>
                        <p className="pt-5">
                            My biggest issues at this stage really stemmed from juggling Spotify’s OAuth2.0 refresh tokens to maintain synchronicity across the application. I’m still not entirely sure if I went about refreshing authentication tokens the right way. I needed the revalidated token at request time so the request to refresh an invalidated token had to have been made and processed before the user navigated to their personal page or share page. To get around this I used redirects within Next.js middleware to redirect to the refresh API route which would then redirect back having stored the original request path in a search parameter. This was the only workaround that I could come up with that didn’t give me issues but I remain suspicious, I feel like it’s a bandaid fix that may give me issues down the line.
                        </p>
                        <p className="pt-5">
                            At this point I could begin the most dreaded part for me: designing a user interface. I borrowed ideas from elsewhere since I had no desire to reinvent the wheel. The finished product generally followed along the lines of the Spotify playlist page which I thought would help with easing the learning curve for new users. This stage made me realize how much I had left to learn in terms of creating an attractive UI. It also made me realize how much I take for granted with the UI’s I interact with everyday. Nowadays when I visit a site or open an app I find myself taking a mental note of where certain elements are placed and how they all work together to create an enjoyable user experience.
                        </p>
                        <p className="pt-5">
                            I experimented with a couple different layouts unique to the public share page but they made making the application responsive across many screen sizes a nightmare so I stuck with an identical layout as the personal page apart from the added feature of submission.
                        </p>
                        <p className="pt-5">
                            Once MusicDrop reached the point where it was usable and not terrible looking l got some friends to test it out. The most noticeable issue seemed to be the onboarding. I thought about onboarding a little beforehand and added a help button that would explain some features but nobody seemed inclined to press it when confused. So I realized I’d have to shove it in new user’s faces on the first visit.
                        </p>
                        <p className="pt-5">
                            After that initial testing phase I continued to improve upon the UI, added notifications, safeguarded API routes, and created submission limits to prevent spam. I decided on using Vercel to host because it is easily integrated with Next.js and Supabase and fixed any remaining caching issues that popped up in production builds.
                        </p>
                        <p className="pt-5">
                            Having completed everything I wanted for MusicDrop 1.0, I submitted an application to Spotify for production level API access to officially launch the site. I plan to market MusicDrop on social media to see if the idea resonates before developing more customization features. For monetization, I aim to keep the application free; if usage grows significantly, I might consider adding ads to cover Vercel/Supabase hosting costs.
                        </p>
                        <p className="pt-5">
                            While awaiting Spotify's approval, I’ve been contemplating my next project. I might explore creating a Linktree alternative that seamlessly integrates with MusicDrop or work on this idea for a social media app I’ve had lingering in my mind for months using React Native.  </p>
                    </div>
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
