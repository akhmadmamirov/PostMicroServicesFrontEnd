import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

function PostList() {
    const [posts, setPosts] = useState({})

    const fetchPosts = async() => {
        const res = await axios.get('http://localhost:4002/posts')
        setPosts(res.data)
    }

    useEffect (() => { 
        fetchPosts()
    }, [])

    const renderedPosts = Object.values(posts).map(post => {
        return  (
            <div className="card w-80 bg-neutral text-neutral-content m-7" key={post.id}>
                
                <div className="card-body items-center text-center">
                    <div className="text-2xl">{post.title}</div>
                </div>
                <div className="ml-6">
                  <CommentList className='' comments={post.comments}/>
                </div>
                <div className="card-body items-center text-center">
                  <CommentCreate postId={post.id} />
                </div>
          </div>

        )
    })

    return (
        renderedPosts.length > 0 ? (
          <div className="container flex flex-wrap">
            {renderedPosts}
          </div>
        ) : (
          <div className='m-7'>No Posts to Display</div>
        )
      );
}
export default PostList