import React from 'react';
import Pokemon from './Pokemon';


const PokeList = (props) => {
  const pokemons = props.list.map((onePoke) => {
    return (
       <li className="body__container--card" key={onePoke.id}>
          <Pokemon pokemonItem={onePoke} />
       </li>
        )
    });
        
  return (
   
    <div>
      <ul className="body__container" >
       {pokemons}
      </ul>
    </div>
  );
}

export default PokeList;