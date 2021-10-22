import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
    const{ id } = useParams();
    const { data, error, isLoading } =  useFetch("http://localhost:8000/projects/" + id);
    const history = useHistory();
    const handleDelete = (id) =>{
        fetch('http://localhost:8000/projects/'+id ,{
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="project-details">
            { isLoading && <div>Loading...</div>}
            { error && <div> { error }</div>}
            {data && (
                <article>
                    <div className="d-flex flex-row justify-content-between">
                        <h2>{data.title}</h2>
                        <button id="deleteBtn" onClick={() => handleDelete(data.id) }>Delete</button>
                    </div>
                    <p>Budget: Rs.{data.budget}/-</p>
                    <p>Client: {data.client}</p>
                    <p>{data.info}</p>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;