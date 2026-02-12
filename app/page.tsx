/*import Image from "next/image";*/
import Intro from "@/components/intro";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black py-8">    
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className = "w-full text-4xl font-bold text-center text-green-600">Page Title</h1>
        <h3 className = "w-full text-2xl font-bold text-center">Subtitle</h3>
        <ul className = "list-disc pl-6 space-y-4">
          <li className = "p-2">Bullet Point 1</li><p>Description</p>
          <li className = "p-2">Bullet Point 2</li><p>Description</p>
          <li className = "p-2">Bullet Point 3</li><p>Description</p>
        </ul> 
      </main>
  
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className = "w-full text-4xl font-bold text-center text-green-600">Page Title</h1>
        <h3 className = "w-full text-2xl font-bold text-center">Subtitle</h3>
        <ul className = "list-disc pl-6 space-y-4">
          <li className = "p-2">Bullet Point 1</li><p>Description</p>
          <li className = "p-2">Bullet Point 2</li><p>Description</p>
          <li className = "p-2">Bullet Point 3</li><p>Description</p>
        </ul>    
    </main>
  </div>       
  );
}