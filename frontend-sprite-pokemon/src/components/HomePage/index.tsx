"use client";
import useWebSocket from "../../hooks/useWebSocket"
import StatusBar from "../StatusBar";
import MainImageSprite from "../MainImageSprite";
import AccionButtons from "../AccionButtons";
import FavoriteGalery from "../FavoriteGalery";
import FavoriteCard from "../FavoriteCard";
import dynamic from "next/dynamic";

const HomePage = () => {
  const {
    images,
    isConnected,
    transport,
    sprite,
    setSprite,
    handleEmitMessage,
    handleFavorites,
    deleteFavorites,
  } = useWebSocket();

  return (
    <>
      <StatusBar isConnected={isConnected} transport={transport} />
      <MainImageSprite sprite={sprite} />
      <AccionButtons
        setSprite={setSprite}
        handleEmitMessage={handleEmitMessage}
        handleFavorites={handleFavorites}
      />
      <FavoriteGalery>
        {images.length > 0 &&
          images.map((img: string, index: number) => (
            <FavoriteCard key={img} img={img} index={index} deleteFavorites={deleteFavorites} />
          ))}
      </FavoriteGalery>
    </>
  );
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
