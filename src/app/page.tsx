import Image from "next/image";
import Header from "./components/Header";
import Timeline from "./components/TimeLine";
import CommentSider from "./components/CommentSider";

export default function Home() {
  return (
   
      <main className="w-full bg-gray-200 px-4 py-6">
      <Header />
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="bg-white rounded-2xl flex-1">
          <Timeline />
        </div>
        <CommentSider />
      </div>
    </main>
  
  );
}
