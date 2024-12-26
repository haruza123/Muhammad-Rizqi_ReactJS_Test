import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        const filteredPosts = storedPosts.filter(post => post.posting === 1);
        setPosts(filteredPosts);
    }, []);

    return (
        <div className="home-container">
            <h1>Home</h1>
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <div key={index} className="post-card">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))
            ) : (
                <p>No posts to display.</p>
            )}
        </div>
    );
}

export default Home;
