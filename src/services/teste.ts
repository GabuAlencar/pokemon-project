import { useEffect, useState } from "react";
import axios from "axios";

interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number; 
  type: string; 

}

const pokemonData = () => {
  const [item, setItem] = useState<Pokemon | null>(null);

  useEffect(() => {
    axios
      .get<Pokemon>("/pokemon/ditto")
      .then((response) => setItem(response.data))
      .catch((err) => {
        console.error("Ops! Ocorreu um erro: " + err);
      });
  }, []);

  return <div>{item.name : "Carregando..."}</div>
};

export default pokemonData;