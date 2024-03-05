import { createContext, useState } from 'react'
import CreatePost from './components/CreatePost.jsx';
import Header from './components/Header.jsx'
import Posts from './components/Posts.jsx'
import './App.css'

const APP_NAME = 'Next-gen Social Media'

function App() {

    const MyContext = createContext() // Create a context variable

    const [posts, setPosts] = useState([
        { title: 'Hello, world!', content: 'React context is great :)' },
        { title: 'But...', content: 'It\'s a little confusing at first!' },
    ])

    return (
        <MyContext.Provider value={ {APP_NAME, posts, setPosts } }> 
        {/* Attach an object to the Context Provider that will hold all the state your app needs */}
        {/* it has a prop called value which accepts any JS data that 
        child components can read via context api */}
            <Header /> {/* Replace prop drilling with context API */}
            <CreatePost />
            <Posts  />
        </MyContext.Provider>
    )
}

export { MyContext, App } // make sure to export the context
