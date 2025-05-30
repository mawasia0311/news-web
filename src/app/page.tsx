import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-2xl font-semibold mb-4">Home Page</h2>
      <Link href="/news/123" className="text-blue-600 underline hover:text-blue-800">
        Go to News Article
      </Link>
    </div>
  );
}
