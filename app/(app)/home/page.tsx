import { Banner } from '@/components/banner'
import { TechStack } from '@/components/tech-stack'
import Testimonials from '@/components/testimonials'
import React from 'react'

const Home = () => {
    return (
        <div>
            <Banner />
            <div>Design Engineer with 5+ years of experience, known for pixel-perfect execution and strong attention to small details.
                Skilled in Next.js, React, TypeScript, and modern front-end technologies; building high-quality, user-centric web and mobile applications.
                Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
                Creator of ZaDark (2022): enhances the Zalo experience on PC & Web
                80k+ downloads on SourceForge
                30k+ active users on the Chrome Web Store
                Creator of React Wheel Picker: iOS-like wheel picker with inertia scrolling & infinite loop
                10k+ weekly downloads on npm
                ▲Vercel OSS Program summer 2025 cohort
            </div>
                <TechStack />
                <Testimonials />
        </div>

    )
}

export default Home