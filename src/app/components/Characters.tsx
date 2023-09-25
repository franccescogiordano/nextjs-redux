"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}
function CharacterList({ characters }: { characters: Array<Character> }) {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentCharacters = characters.slice(startIndex, endIndex);

  const totalPages = Math.ceil(characters.length / itemsPerPage);

  const handlePageChange = (page: any): any => {
    setCurrentPage(page);
  };

  return (
    <div className="container w-80 mb-2 p-4 gap-4">
      <ul>
        {currentCharacters.map((charac: Character) => (
          <Link key={charac.id} href={`/characters/${charac.id}`}>
            <li
              key={charac.id}
              className="bg-slate-400 mb-2 p-4 rounded-md text-black font-bold flex justify-between"
            >
              <div>
                <h5>Nombre: {charac.name}</h5>
                <Image
                  src={charac.image}
                  className="rounded-full"
                  alt="no img"
                  width={80}
                  height={80}
                  unoptimized={true}
                />
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded-full ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-blue-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
