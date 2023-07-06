import { useState } from "react"
import axios from "axios"

function CommentCreate({postId}) {
    const [content, setContent] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        })

        setContent('');
    }

    return (
            <div className="container m-10 mt-4">
                <form onSubmit={onSubmit}>
                    <div className="text-2xl mb-6">New Comment</div>
                    <div className="form-group mb-6">
                        <input type="text" 
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        placeholder="Type here"
                        className="form-control input input-bordered input-secondary w-full max-w-xs" />
                    </div>
                    <button className="btn btn-active btn-primary">Submit</button>
                </form>
            </div>
            )
}

export default CommentCreate