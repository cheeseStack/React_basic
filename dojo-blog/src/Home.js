import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect( () => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
    }, []);
    
    return (  
        <div className="home">
            {isPending && <div>Loading . . . </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
            {/* <button onClick = { () => setName('luigi')} >Change name</button> */}
            {/* <p>{ name }</p> */}
        </div>
    );
}
 
export default Home;