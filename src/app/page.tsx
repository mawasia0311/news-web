import Header from "./components/Header";
import Timeline from "./components/TimeLine";
import CommentSider from "./components/CommentSider";

export default function Home() {
  return (
    <main className="w-full bg-gray-50 px-4 py-6">
      <Header />

      <div className="flex gap-4 mt-6 overflow-x-auto ">

        <div className="bg-white rounded-2xl md:flex-grow ">
          <Timeline />
        </div>

  
        <div className="w-full  md:w-1/3 text-black min-h-full  ">
          <CommentSider />
        </div>
      </div>
    </main>
  );
}
