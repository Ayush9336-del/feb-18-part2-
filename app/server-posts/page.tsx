import styles from "./post.module.css";

interface Post {
  id: number;
  title: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function ServerPosts() {
  const posts = await getPosts();

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className={`${styles.title} text-3xl mb-6`}>
        Server Side Fetch + Tailwind
      </h1>

      {posts.map((p) => (
        <div
          key={p.id}
          className="p-4 mb-4 bg-white rounded shadow 
                     hover:bg-blue-100 
                     focus:ring-2 focus:ring-blue-400"
        >
          <p className={styles.text}>{p.title}</p>
        </div>
      ))}
    </div>
  );
}
