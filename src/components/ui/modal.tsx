import React, { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  // Impede o scroll da página principal enquanto o modal está aberto
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Desabilita o scroll
    return () => {
      document.body.style.overflow = "auto"; // Habilita o scroll ao fechar o modal
    };
  }, []);

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
          {/* Botão para fechar o modal */}
          <button
            className="absolute top-2 right-2 hover:text-red-600"
            onClick={onClose}
          >
            ❌
          </button>

          {/* Conteúdo do Modal */}
          <div className="text-center">
            <span>#0002</span>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
              alt="Ivysaur"
              className="mx-auto w-[150px] h-[150px]"
            />
            <h2 className="text-3xl font-bold mt-2">Ivysaur</h2>
            <p className="text-gray-500">
              <strong>Weight:</strong> 130 kg | <strong>Height:</strong> 10 m
            </p>
            <div className="flex justify-center gap-2 mt-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">
                Grass
              </span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded">
                Poison
              </span>
            </div>

            <div className="mt-4">
              <p className="text-lg font-semibold mb-2">Evolution Forms</p>
              <div className="flex justify-center gap-6">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                    alt="Bulbasaur"
                    className="w-[150px] h-[150px]"
                  />
                  <p>#1 Bulbasaur</p>
                </div>
                <div>
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                    alt="Venusaur"
                    className="w-[150px] h-[150px]"
                  />
                  <p>#3 Venusaur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
