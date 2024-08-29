import Image from "next/image";
import CharacterCard from "@/components/CharacterCard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-24">
      <section className="container mx-auto my-8 bg-white">
        <div className="row-span-1 text-center">
          <h1 className="text-6xl font-bold ">The Rick and Morthy API</h1>
        </div>
      </section>
      <section className="max-w-full mx-auto">
      <div className="grid grid-cols-2 bg-slate-400">
        <CharacterCard />
        <CharacterCard />
      </div>
      </section>
    </main>
  );
}
