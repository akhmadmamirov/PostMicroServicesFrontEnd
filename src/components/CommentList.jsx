import axios from "axios"
import { useState, useEffect } from "react"

function CommentList({postId}) {

    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        setComments(res.data)
        console.log(res.data)
    }

    useEffect(() => {
        fetchComments()
    }, [])

    const renderComments = comments.map(comment => {
        return (<div key={comment.id}>
            <li className="">
                {comment.content}
            </li>
            
        </div>)
    })

    return (
        renderComments.length > 0 ? (
            <div className="list-disc">
                <p className="mb-2">{renderComments.length} Comments:</p>
                {renderComments}
            </div>

        ) : (
          <div className='m-7'>No Comments to Display</div>
        )
    );
}

export default CommentList