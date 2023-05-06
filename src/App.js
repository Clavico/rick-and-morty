import { useState, useEffect } from 'react'
import Character from './components/Character'

function App() {
  const [Characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetchCharacters()
      setCharacters(res)
    }

    getCharacters()
  }, [])

  const fetchCharacters = async () => {
    var nextUrl = 'https://rickandmortyapi.com/api/character';
    var result = [];
    do{
      const res = await fetch(nextUrl)
      const data = await res.json()
      result = result.concat(data.results)
      nextUrl = data.info.next
    }
    while(nextUrl != null)
    return result
  }

  return (
    <div className="container">
      {Characters.map((character) => {
        return <Character
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
        />;
      })}
    </div>
  );
}

export default App;
