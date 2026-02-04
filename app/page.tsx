/*import Image from "next/image";*/
import Intro from "@/components/intro";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black py-8">    
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className = "w-full text-4xl font-bold text-center text-green-600">Sean Peterson</h1>
        <h3 className = "w-full text-2xl font-bold text-center">About Me</h3>
        <ul className = "list-disc pl-6 space-y-4">
          <li className = "p-2">I have been a teacher for 20 years. I teach AP Computer Science A, AP Computer Science Principles and PLTW courses.</li>
          <li className = "p-2">I was born and raised in Stamford, CT.</li>
          <li className = "p-2"><p>I love to travel. </p>
          <p>I visit family in Italy every summer and get to the beach to rest and take in some sunshine.</p></li>
        </ul>
    
      <Intro />
    </main>
  </div>    
  );
}