"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 w-64 h-screen">
      <ul className="space-y-2">
        <li>
          <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
            Home
          </Link>
        </li>
        <li>
          <Link href="/favorites" className="block p-2 hover:bg-gray-700 rounded">
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
