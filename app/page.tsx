import Link from "next/link";


export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <span className="text-5xl">Hello World !</span>
      <Link href={'/about'}>About</Link>
    </main>
  );
}
