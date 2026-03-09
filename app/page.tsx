/*import Image from "next/image";*/
import Intro from "@/components/intro";
import AccordionUI from "@/layout/ui/accordion";
import Link from 'next/link';
import User from "@/components/user";
import { projectShutdown } from "next/dist/build/swc/generated-native";
import projects from "@/data/projects.json";

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1/posts");
  const data = await response.json();
  return data;
}

const Home: React.FC = async() => {
  const posts = await getPosts();

  console.log('Posts: ',posts);
  return (
    
    <div>
      <div className="flex gap-6"> 
        <div className = "w-1/2">      
          <h1 className = "w-full text-4xl font-bold text-center text-green-600">Page Title</h1>
          <h3 className = "w-full text-2xl font-bold text-center">Subtitle</h3>  
          <ul className = "list-disc pl-6 space-y-4">
            <li className = "p-2">Bullet Point 1</li><p>Description</p>
            <li className = "p-2">Bullet Point 2</li><p>Description</p>
            <li className = "p-2">Bullet Point 3</li><p>Description</p>
          </ul>
      </div>
    </div> 
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

      
        <ul>
          {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="mb-2">
            <Link className="text-amber-400 hover:underline" href={`/projects/${post.id}`}>{post.title}</Link>
          </li>
          ))}
        </ul>

      </main>
    </div>
</div>
  );
}
export default Home;