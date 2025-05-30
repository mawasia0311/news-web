import Header from "./components/eventHeader";
import Timeline from "./components/TimeLine";
import CommentSider from "./components/CommentSider";
import Layout from './components/layout';
export default function Home() {
  return (
    <Layout>
    <main className="w-full bg-gray-50 px-2 sm:px-4 py-4 sm:py-6">
      <Header />

      <div className="flex flex-row gap-3 mt-6 w-full">

        <div className="flex-[2] min-w-0 bg-white rounded-2xl">
          <Timeline />
        </div>

  
        <div className="flex-[1] min-w-0">
          <CommentSider />
        </div>
      </div>
    </main>
    </Layout>
  );
}
