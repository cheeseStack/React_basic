import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem blah blah ...' , author: 'mario', id: 1 },
        {title: 'Welcome party', body: 'lorem blah blah ...' , author: 'yoshi', id: 2 },
        {title: 'Web dev top tips', body: 'lorem blah blah ...' , author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect( () => {
        console.log('use efffect ran');
        console.log(blogs);
    });
    
    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
        </div>
    );
}
 
export default Home;