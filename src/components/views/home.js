import React from 'react'
import AppHero from '../home/hero'
import AppAbout from '../home/about'

function AppHome() {
    return (
        <div className="main">
            <AppHero />
            <AppAbout />
        </div>
    )
}

export default AppHome