import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';


const BlogDetails  = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:3001/blogs/' + id);

    const navigate = useNavigate(); 
    const handleDelete = ( ) => {
        fetch('http://localhost:3001/blogs/' + blog.id, {
            method: 'DELETE'
        }).then( () => {
            navigate({pathname: '/'}); // this navigate to the Home page once deleted
        })

    };

    return (  
        <div className="blog-details">
            { isPending && <div>Loading  . . .</div>}
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div> { blog.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>


    );
}
 
export default BlogDetails;