import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null); // this sets a blank db by default
    const [isPending, setIsPending] = useState(true); // this shows the loading messge or screen //
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                console.log(response);
                if(!response.ok) {
                    throw Error('could not fetch the data for that resourse');
                }
                return response.json()
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => { // this logs any errors to the console // 
                setIsPending(false);
                setError(err.message);
            })
    }, []);
    
    return (  
        <div className="home">
            { error && <div>{ error } </div> }
            { isPending && <div>Loading . . . </div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
            {/* <button onClick = { () => setName('luigi')} >Change name</button> */}
            {/* <p>{ name }</p> */}
        </div>
    );
}
 
export default Home;