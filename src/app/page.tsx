import Header from "./components/eventHeader";
import Timeline from "./components/TimeLine";
import CommentSider from "./components/CommentSider";
import Layout from './components/layout';
export default function Home() {
  return (
    <Layout>
      <main className="px-4 py-6">
        <Header />
        <div className="flex gap-4 mt-6 overflow-x-auto ">

          <div className="bg-white rounded-2xl md:flex-grow ">
            <Timeline />
          </div>
          <div className="w-full md:w-1/3 text-black min-h-full">
            <CommentSider />
          </div>
        </div>
      </main>
    </Layout>
  );
}
