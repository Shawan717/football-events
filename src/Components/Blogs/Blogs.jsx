import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";


const Blogs = () => {
    const [title,setTitle]=useState([])
    useEffect(()=>{
        fetch('title.json')
        .then(res=>res.json())
        .then(data=>setTitle(data))
    },[])
    return (
        <div className="max-w-[1440px] mx-auto">
            {
                title.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;