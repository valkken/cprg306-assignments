import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="font-extrabold text-3xl font-serif">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" className="text-xl font-bold font-serif">Week 2 Assignment</Link>
      <br />
      <Link href="/week-3" className="text-xl font-bold font-serif">Week 3 Assignment</Link>
      <br />
      <Link href="/week-4" className="text-xl font-bold font-serif">Week 4 Assignment</Link>
      <br />
      <Link href="/week-5" className="text-xl font-bold font-serif">Week 5 Assignment</Link>
      <br />
      <Link href="/week-6" className="text-xl font-bold font-serif">Week 6 Assignment</Link>
      <br />
      
    </main>
  );
}

