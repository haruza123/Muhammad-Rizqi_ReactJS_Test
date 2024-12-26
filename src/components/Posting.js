import React, { useState, useEffect } from 'react';
import "./Posting.css";

function Posting() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posting, setPosting] = useState(0);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    }, []);

    const handleSubmit = () => {
        if (!title || !content) {
            alert("Title and Content cannot be empty.");
            return;
        }
        const newPost = { title, content, posting };
        const updatedPosts = [...posts, newPost];
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setTitle('');
        setContent('');
        setPosting(0);
    };

    const handleCheckboxChange = (index) => {
        const updatedPosts = [...posts];
        updatedPosts[index].posting = updatedPosts[index].posting === 1 ? 0 : 1;
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    };

    return (
        <div className="posting-container">
            <h1 className="posting-header">Create a New Post</h1>
            <div className="post-form">
                <input
                    type="text"
                    placeholder="Enter Post Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Enter Post Content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    rows="5"
                ></textarea>
                <button onClick={handleSubmit}>Submit Post</button>
            </div>
            <div className="post-list">
                <h2>Your Posts</h2>
                {posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div className="post-item" key={index}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={post.posting === 1}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                Show on Home
                            </label>
                        </div>
                    ))
                ) : (
                    <p className="no-posts">No posts yet. Start creating one!</p>
                )}
            </div>
        </div>
    );
}

export default Posting;
