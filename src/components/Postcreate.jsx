import { useState } from "react";
import axios from "axios";


function PostCreate() {

    const [title, setTitle] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/posts', {
            title
        })
        setTitle('')
    }

    


    return (
        <div className="container m-10">
            <form onSubmit={onSubmit}>
                <div className="text-2xl mb-6">Create Post</div>
                <div className="form-group mb-3">
                    <label>Title</label>
                </div>
                <div className="form-group mb-6">
                    <input type="text" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Type here"
                    className="form-control input input-bordered input-secondary w-full max-w-xs" />
                </div>
                <button className="btn btn-active btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default PostCreate