import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false); // this is for the blog form submission

    // submit event for the form: 
    const handleSubmit = (e) => {
        e.preventDefault(); // this stops the page refreshing once submitted
        const blog = { title, body, author}; // this creastes the blog object key value pairs
        
        setIsPending('true'); //this shows a loading message when blog submitted
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)   
        }).then ( () => {
            console.log('new blog added');
            setIsPending('false');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                {/* blog title */}
                <label>Blog title:</label>
                <input 
                type="text" 
                required
                value= {title}
                onChange = {(e) => setTitle(e.target.value) }
                />
                {/* blog body */}
                <label>Blog body:</label>
                <textarea 
                required
                value={ body }
                onChange = { (e) => setBody(e.target.value)}>  
                </textarea>
                {/* blog author */}
                <label> Blog author</label>
                <select 
                    value ={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>     
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog . . .</button>}
            </form>
        </div>
     );
}
 
export default Create;