import Image from "next/image";
async function getCharacter(id: number) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = res.json();
  return data;
}

interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}
export default async function CharacterPage({ params }: { params: any }) {
  //  console.log(params)

  const charac: Character = await getCharacter(params.id);
  return (
    <>
      <ul>
        {
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
        }
      </ul>
    </>
  );
}
