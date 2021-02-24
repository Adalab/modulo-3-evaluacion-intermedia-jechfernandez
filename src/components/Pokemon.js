import React from 'react';

const Pokemon = props => {
  const pokemon = props.pokemonItem.types.map ((type, i) => {
    return (
      <li key={i}>
        {type}
      </li>
    );
  });

  return (
    <article>
      <img src={props.pokemonItem.url} alt={props.pokemonItem.name} />
      <h2>{props.pokemonItem.name}</h2>
      <ul>
        {pokemon}
      </ul>
    </article>
  );
};

export default Pokemon;
