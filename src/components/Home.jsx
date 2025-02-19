import React from 'react'
import Hero from './Hero'
import TopBooks from './TopBooks'
import FeedBacks from './Feedbacks'
import NavBar from './NavBar'
import About from './About'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <TopBooks />
        <FeedBacks />
        <About />
    </div>
  )
}

export default Home