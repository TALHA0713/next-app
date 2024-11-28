import Link from 'next/link';
import Head from 'next/head';
export default function HomePage() {
  return (
    <>
    <Head>
      <title>My Next App</title>
      <meta name='keywords' content='next'/>
    </Head>
     <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Website!</h2>
      <p className="text-lg text-gray-700">
        Discover the best content, learn more about us, or get in touch today.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Beautiful banner"
        className="rounded-lg shadow-lg mx-auto my-6"
      />
      <Link
        href="/about"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Learn More
      </Link>
    </div>
    </>
   
  );
}
