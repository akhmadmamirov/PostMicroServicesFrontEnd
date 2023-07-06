import { useState, useEffect } from "react";
import axios from "axios";


function PostList() {
    const [posts, setPosts] = useState({})

    const fetchPosts = async() => {
        const res = await axios.get('http://localhost:4000/posts')
        setPosts(res.data)
    }

    useEffect (() => { 
        fetchPosts()
    }, [])

    const renderedPosts = Object.values(posts).map(post => {
        return  (
            <div className="card w-96 bg-neutral text-neutral-content m-6" key={post.id}>
                <div className="card-body items-center text-center">
                <p>We are using cookies for no reason.</p>
                <div className="text-2xl mb-6">{post.title}</div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Like</button>
                    <button className="btn btn-ghost">D like</button>
                </div>
                </div>
          </div>

        )
    })


    return (
        <div className="container ml-10">
            <div className="text-2xl">Posts</div>
            {renderedPosts}
        </div>
        
    )
}

export default PostList