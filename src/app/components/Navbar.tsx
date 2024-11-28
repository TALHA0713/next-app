import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav>
          <Link href="/" className="px-4 hover:underline">
            Home
          </Link>
          <Link href="/about" className="px-4 hover:underline">
            About
          </Link>
          <Link href="/contact" className="px-4 hover:underline">
            Contact
          </Link>
          <Link href="/product/1" className="px-4 hover:underline">
          Go to Product 1
          </Link>
          <Link href="/product/2" className="px-4 hover:underline">
          Go to Product 2
          </Link>
        </nav>
      </div>
    </header>
  );
}
