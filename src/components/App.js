import React, { useState } from 'react';
import '../stylesheets/App.scss';
import PokeList from './PokeList';
import pokemons from '../data/data.json';

function App() {
<<<<<<< HEAD
  const [data] = useState(pokemons);
=======
  const [pokemon] = useState(pokemons);
>>>>>>> c048ec17c1896cafb76b5b781028f2a7ea7a71e0
  
    return (
      <div className="body">
        <header>
          <h2 className="body__title">Mi lista de Pokémon</h2>
        </header>
        <main>
<<<<<<< HEAD
          <PokeList pokemons={data} />
=======
          <PokeList pokemons={pokemon} />
>>>>>>> c048ec17c1896cafb76b5b781028f2a7ea7a71e0
        </main>
      </div>
    );
  }
export default App;