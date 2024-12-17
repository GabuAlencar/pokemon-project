import { Button } from "./components/ui/button";
import Logo from "/src/assets/pokemon-logo.svg";
import { Input } from "./components/ui/input";
import { useState } from "react";
import axios from "axios";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Modal from "./components/ui/modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div id="app" className="bg-custom-gradient h-screen w-full">
        <div className="flex items-center justify-center p-8">
          <img
            src={Logo}
            alt="Logo pokemon"
            className="w-52 h-28 overflow-hidden"
          />
        </div>
        <div className="flex gap-x-8 items-center justify-center p-8">
          <div className="categories">
            <span className="text-white ml-[110px]">Categorias</span>
            <Select>
              <SelectTrigger className="w-[180px] bg-slate-200 w-80">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="bg-slate-200 ">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="fighting">Fighting</SelectItem>
                <SelectItem value="flying">Flying</SelectItem>
                <SelectItem value="poison">Poison</SelectItem>
                <SelectItem value="ground">Ground</SelectItem>
                <SelectItem value="rock">Rock</SelectItem>
                <SelectItem value="bug">Bug</SelectItem>
                <SelectItem value="ghost">Ghost</SelectItem>
                <SelectItem value="steel">Steel</SelectItem>
                <SelectItem value="fire">Fire</SelectItem>
                <SelectItem value="water">Water</SelectItem>
                <SelectItem value="grass">Grass</SelectItem>
                <SelectItem value="electric">Electric</SelectItem>
                <SelectItem value="ice">Ice</SelectItem>
                <SelectItem value="dragon">Dragon</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="fairy">Fairy</SelectItem>
                <SelectItem value="stellar">Stellar</SelectItem>
                <SelectItem value="unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="search">
            <span className="text-white ml-[120px]">Search</span>
            <Input
              placeholder="Pikachu"
              className="bg-white-500 items-center justify-center w-80 bg-slate-200"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="pokemonList-Container grid grid-cols-3 gap-4">
            <div className="pokemonList-Item">
              {isModalOpen && <Modal onClose={closeModal}></Modal>}

              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Bulbasaur
              </Button>
            </div>

            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Ivysaur
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
                onClick={openModal}
              >
                Venusaur
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Charmander
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Charmeleon
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Charizard
              </Button>
            </div>

            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Squirtle
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Wartortle
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Blastoise
              </Button>
            </div>

            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Caterpie
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Metapod
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Butterfree
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Weedle
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Kakuna
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Beedrill
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Pidgey
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Pidgeotto
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Pidgeot
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Rattata
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Raticate
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Spearow
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Fearow
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Ekans
              </Button>
            </div>
            <div className="pokemonList-Item">
              <Button
                onClick={openModal}
                className="text-gray-900 bg-sky-100 hover:bg-sky-100 w-[400px] h-[40px] p-4 rounded transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                Arbok
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
