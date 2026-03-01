/*import Image from "next/image";*/
import Intro from "@/components/intro";
import AccordionUI from "@/layout/ui/accordion";
export default function Home() {
  return (
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
  );
}