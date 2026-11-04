import { useEffect, useState } from "react"

const useDebounce = (search,delay)=>{
  const [debounceValue,setDebounce] = useState(search);
  useEffect(()=>{
    const timer = setTimeout(()=>{
        setDebounce(search)
       
    },delay)

    return ()=>{
        clearTimeout(timer);
    }

  },[search])

  return debounceValue
}


export default useDebounce