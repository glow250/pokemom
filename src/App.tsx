import * as React from "react";
import { Component } from "react";
import PokemonSearch from "./components/pokemonSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonSearch name="John Doe" numberOfPokemons={5} />
      </div>
    );
  }
}

export default App;
