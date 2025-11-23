import Link from "next/link";

export default function Home() {
  const weeks = [2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <main>
      <h1 className="font-extrabold text-3xl font-serif">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <ul className=" font-serif text-2xl text-blue-600">
        {weeks.map((week) => (
          <li key={week} className="m-2">
            <Link href={`/week-${week}`}>Week {week} Project</Link>
          </li>
        ))}
      </ul>
      
    </main>
  );
}
