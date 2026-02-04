/*import Image from "next/image";*/
import Intro from "@/components/intro";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">    
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className = "w-full text-4xl font-bold text-center">Sean Peterson</h1>
        <h3 className = "w-full text-2xl font-bold text-center">About Me</h3>
        <Intro />
    </main>
  </div>        
  );
}