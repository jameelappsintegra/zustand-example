import { useState } from "react";
import { usePokemonStore } from "../store";

const Form = () => {
  const [name, setName] = useState("");
  const addPokemons = usePokemonStore((state) => state.addPokemons);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const addPokemon = () => {
    addPokemons({ name: name });
    clear();
  };

  const clear = () => setName("");

  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          value={name}
        ></input>
      </div>
      <div className="col-md-2">
        <button
          className="btn btn-outline-primary"
          onClick={(e) => addPokemon()}
        >
          Add
        </button>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default Form;
