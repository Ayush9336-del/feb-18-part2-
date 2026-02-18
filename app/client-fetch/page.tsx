"use client";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
}

export default function ClientFetchPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async function (){
      const data = await  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")

      const res = await data.json (); 
      const values:Post[] = res ; 
        setPosts(values);
        setLoading(false);
    }
    getData() ; 

    }, []);

  if (loading) return <h2>Loading client data...</h2>;

  return (
    <div>
      <h1>Client Side Fetching</h1>
      {posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}
