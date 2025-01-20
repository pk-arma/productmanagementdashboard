import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-blue-500 p-4 text-white w-200 h-500" style={{width:"200px",height:'1000px'}}>
      <div>
      <Link href="/">Home</Link>
      </div>
      <div>
      <Link href="/favorites">Favorites</Link>
      </div>
    </div>
  );
}
