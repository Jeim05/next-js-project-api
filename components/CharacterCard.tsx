import { Character } from '@/types'
import Image from 'next/image';
import React from 'react'

interface CharacterCardProps{
    character: Character;
}

const CharacterCard = () => {
  return (
    <div className='flex flex-col items-center bg-blue border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl '>
        <Image src="/" width={200} height={200} alt='Character image' className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'/>
        <div className="flex flex-col justify-between p-4 leading-normal">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name</h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Status</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span classname="font-bold">Ultima ubicación:</span></span>  Ubicación </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span classname="font-bold">Visto por primera vez en: </span></span> </p>
        
    </div>

    </div>
  )
}

export default CharacterCard
