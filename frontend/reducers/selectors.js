export const selectAllBeers = state => Object.values(state.entities.beers);

// export const selectPokeItems = (state, beer) => {
//   return beer ? beer.item_ids.map(id => state.entities.items[id]) : [];
// };

// export const selectPokemonItem = (state, id) => {
//   return state.entities.items[id];
// };
