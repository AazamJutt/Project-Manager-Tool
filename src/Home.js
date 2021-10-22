import useFetch from "./useFetch";
import ProjectList from './ProjectList'

const Home = () => {
    const {data,isLoading,error} = useFetch("http://localhost:8000/projects")
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <ProjectList projects = {data}  title="All Projects"/>}
        </div>

     );
}
 
export default Home;