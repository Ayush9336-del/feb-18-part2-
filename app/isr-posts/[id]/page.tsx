interface Post {
  id: number;
  title: string;
  body: string;
}

 export const revalidate = 20;

export async function generateStaticParams() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await res.json();

  return posts.map((post: Post) => ({
    id: post.id.toString(),
  }));
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res.json();
}

export default async function PostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);

  return (
    <div>
      <h1>ISR Post Details</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
