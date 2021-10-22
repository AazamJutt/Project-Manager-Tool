import { useState, useEffect } from "react";

const useFetch = (url) => {
    const[data,setData] = useState(null)
    const[isLoading,setLoading] =useState(true);
    const[error,setError] = useState(null);


    useEffect(()=>{
        const abortCon = new AbortController();
       fetch(url, {signal: abortCon.signal})
       .then(res => {
           if(!res.ok){
               throw Error("Server Error");
           }
           return res.json();
       })
       .then(dat=>{
           setData(dat);
           setLoading(false);
           setError(null);
       })
       .catch((err =>{
           if(err.name === 'AbortError'){
               console.log("fetch aborted")
           }
           else{
            setLoading(false);
            setError(err.message);
           }
       }))
    }, [url]);
    
    return { data, isLoading, error };
}
 
export default useFetch;