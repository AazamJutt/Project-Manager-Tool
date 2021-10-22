import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [client,setClient] = useState('');
    const [budget,setBudget] = useState('');
    const [isLoading,setLoading] = useState(false);
    const history = useHistory();

    const handlSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,client,budget};
        setLoading(true);

        fetch('http://localhost:8000/projects/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            setLoading(false);
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit = {handlSubmit}>
                <label>Project Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Project Info</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Client</label>
                <input type="text" required value={client} onChange={(e) => setClient(e.target.value)}/>
                <label>Budget</label>
                <input type="number" required value={budget} onChange={(e) => setBudget(e.target.value)}/>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Loading...</button>}
            </form>
        </div>
     );
}
 
export default Create;