'use client';
import { useParams } from 'next/navigation';

const NewsDetailPage = () => {
  const { newsId } = useParams();

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold">News ID: {newsId}</h1>
      <p>News ID: {newsId}</p>
      {/* Video, title, like/dislike, and summary timeline */}
    </div>
  );
};

export default NewsDetailPage;
