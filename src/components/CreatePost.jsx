import { useContext, useState } from "react";
import { MyContext } from "../App";

function getInitialPost() { //
    const title = localStorage.getItem("title") // retrieve from local storage
    const content = localStorage.getItem("content")

    return {
      title: title || '',
      content: content || '',
    }
}

export default function CreatePost() {
    const context = useContext(MyContext) // replace props with useContext
    const [post, setPost] = useState(getInitialPost()) // on load check if localstorage has data

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost({
          ...post,
          [name]: value,
        })
        localStorage.setItem(name, value) // update localstorage on input
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        context.setPosts([...context.posts, post])
        localStorage.clear() // clear localstorage on submit
        setPost(getInitialPost) // clear input fields
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" name="title" onChange={handleChange} value={post.title}></input>
            </label>
            <br/>
            <label>
              Content:
              <textarea name="content" onChange={handleChange} value={post.content} cols={50} rows={5}></textarea>
            </label>
            <br/>
            <input type="submit" value="Post!"></input>
        </form>
    )
}
