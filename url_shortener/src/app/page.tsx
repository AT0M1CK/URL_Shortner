import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <button className="flex justify-center hover:bg-yellow-200 text-center items-center bg-yellow-400 hover:shadow-lg text-slate-900 m-2 px-4 py-2 font-medium shadow-md rounded-md  text-2xl">
          <Link href="/home">Load Page </Link>
        </button>
      </div>
    </main>
  );
}
