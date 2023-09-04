import { useEffect, useState } from "react";
import GifList from "./GifList";

const GifListContainer = () => {
    const [data, setData] =useState([])
   
    useEffect(()=>{
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=0Ba7e2W91xlh3VnhxfFnqViuMaBVipCO")
        .then(r=>r.json())
        .then(gifs=> setData(gifs))
        .catch(error=> console.log(error))
    },[])

    return <div>
        <GifList data={data}/>
    </div>
}
 
export default GifListContainer;