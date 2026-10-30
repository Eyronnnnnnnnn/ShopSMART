import { useState } from "react";

function useFetch(url){
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error ,setError] = useState(null)

    useEffect(()=>{
        try{
            const response = await fetch(url);
            const Getresponse = await response.json()
            setData(Getresponse);

        }catch(error){
            console.log(error)
        }
    },[url])
}