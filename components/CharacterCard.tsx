import { Character } from '@/types'
import Image from 'next/image';
import React from 'react'


interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className='flex flex-col items-center bg-gray-300 border border-gray-200 rounded-lg shadow lg:flex-row md:max-w-xl py-6 px-4 md:py-2 mx-4 my-6'>
      <Image src={character.image} width={220} height={220} alt={character.name} className='object-cover w-full rounded-t-lg h-48 md:h-auto md:w-full lg:w-48 md:rounded-none md:rounded-s-lg' />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{character.name}</h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{character.status} - {character.species}</p>
        <p className="mb-0 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Ultima ubicación:</span></p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{character.origin.name} </p>
        <p className="mb-0 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Visto por primera vez en: </span> </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{character.location.name} </p>
      </div>
    </div>
  )
}

export default CharacterCard
