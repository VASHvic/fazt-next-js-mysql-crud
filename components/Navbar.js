import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 text-white flex justify-between">
      <Link className="" href="/">
        <a className="mr-3">Products</a>
      </Link>
      <div className="flex">
        <Link className="" href="/about">
          <a className="mr-3">About</a>
        </Link>
        <Link className="" href="/new">
          <a className="mr-3">Create</a>
        </Link>
      </div>
    </nav>
  );
}
