'use client'
import CharacterCard from "@/components/CharacterCard";
import { fetchCharacters } from "@/utils";
import { useEffect, useState } from "react";
import { Character } from '../types';

export default function Home({}) {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(()=>{
    const loadCharacters = async () =>{
      const data = await fetchCharacters();
      setCharacters(data);
    };

    loadCharacters();
  },[])

  return (
    <main className="min-h-screen flex flex-col items-center p-6 lg:p-24">
      <section className="container mx-auto my-8 bg-white">
        <div className="row-span-1 text-center my-4">
          <h1 className="text-6xl font-bold underline decoration-solid">The Rick and Morthy API</h1>
        </div>
      </section>
      <section className="max-w-full mx-auto">
        <div className="grid md:grid-cols-2">
          {
            characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))
          }
        </div>
      </section>
    </main>
  );
}
