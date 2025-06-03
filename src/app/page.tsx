import Header from "./components/eventHeader";
import Timeline from "./components/TimeLine";
import CommentSider from "./components/CommentSider";
import Layout from './components/layout';

export default function Home() {
  return (
    <Layout>
      <main className="w-full px-2 sm:px-4 py-4 sm:py-6">
        {/* Always on top */}
        <Header />

        {/* Responsive layout: column on mobile, row on larger screens */}
        <div className="flex flex-col lg:flex-row gap-4 mt-6 w-full">
          {/* Timeline section */}
          <div className="w-full lg:flex-[2] min-w-0 ">
            <Timeline />
          </div>

          {/* CommentSider section */}
          <div className="w-full lg:flex-[1] min-w-0">
            <CommentSider />
          </div>
        </div>
      </main>
    </Layout>
  );
}
