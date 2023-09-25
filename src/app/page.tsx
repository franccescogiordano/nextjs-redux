import Characters from "@/app/components/Characters";
async function fetchCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  return await res.json();
}

export default async function Home() {
  const characters = await fetchCharacters();
  return <Characters characters={characters.results} />;
}
