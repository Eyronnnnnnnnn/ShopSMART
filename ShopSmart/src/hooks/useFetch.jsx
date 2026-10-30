import { useState,useEffect } from "react";

function useFetch(url){
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [ error,setError] = useState(null)

    useEffect(()=>{

        const fetchdata = async()=>{
            try{
            const response = await fetch(url);

            if(!response.ok){
                throw new Error("Failed to Fetch Data")
            }
            const Getresponse = await response.json()
            setData(Getresponse);
            console.log(data);
            setLoading(false)
        }catch(error){
            setError(error)
            setLoading(false)
            console.log(error)
        }

    }

    fetchdata()
    },[url]);

       return {data,loading,error}
        }
        

        export default useFetch