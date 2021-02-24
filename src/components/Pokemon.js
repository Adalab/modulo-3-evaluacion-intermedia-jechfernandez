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
    <article className="card">
      <img className="card__image"src={props.pokemonItem.url} alt={props.pokemonItem.name} />
      <h2 className="card__title">{props.pokemonItem.name}</h2>
      <ul className="card__list">
        {pokemon}
      </ul>
    </article>
  );
};

export default Pokemon;
