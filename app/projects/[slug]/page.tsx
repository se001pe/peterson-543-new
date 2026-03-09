import projects from "@/data/projects.json";

type TodoSampleProps = {
  params: {
    id: number;
    title: string;
    body: string;
  };
};

const ProjectPage: React.FC<TodoSampleProps> = async ({
  params,
}: TodoSampleProps) => {
  
  const { slug } = await params; // Extract the id from the params by destructuring
  console.log('Params: ', params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/1/posts/${slug}`,
  );
  const data = await response.json();

  console.log('Project Data: ', data);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Class ID: {data.id? data.id : 0}</h1>
        <p>Course Name: {data.title? String(data.title) : "Unknown"}</p>
        <p>Teacher: {data.body ? String(data.body) : "Unknown"}</p>
      
      </main>
    </div>
  );
};

export default ProjectPage;