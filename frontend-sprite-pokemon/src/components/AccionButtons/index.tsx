import { Dispatch, MouseEventHandler, SetStateAction} from "react";

interface ActionButtonsProps {
  setSprite: Dispatch<SetStateAction<string>>;
  handleEmitMessage: MouseEventHandler;
  handleFavorites: MouseEventHandler;
}

export default function AccionButtons({
  setSprite,
  handleEmitMessage,
  handleFavorites,
}: ActionButtonsProps) {
  

  const handleClear = () => {
    setSprite("");
  };

  return (
    <>
      <div className="w-96 flex gap-2 mt-4 justify-center [&>button]:rounded-md [&>button]:px-4 [&>button]:py-2 [&>button]:text-white [&>button]:font-mono">
        <button
          className="hover:scale-105 border-2 bg-gray-950"
          onClick={handleEmitMessage}
        >
          Start
        </button>
        <button
          className=" hover:scale-105 border-2 bg-gray-950"
          onClick={handleClear}
        >
          Clear
        </button>
        <button 
          onClick={handleFavorites} 
          className=" hover:scale-105 bg-red-900">
          Add to Favorites
        </button>
      </div>
    </>
  );
}
