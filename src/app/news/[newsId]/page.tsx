'use client';
import CommentSider from '@/app/components/CommentSider';
import Header from '@/app/components/eventHeader';
import Layout from '@/app/components/layout';
import Timeline from '@/app/components/TimeLine';
// import { useParams } from 'next/navigation';

const NewsDetailPage = () => {
  // const { newsId } = useParams();

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
};

export default NewsDetailPage;
