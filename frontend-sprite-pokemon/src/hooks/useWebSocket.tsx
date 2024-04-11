"use client";
import { useEffect, useState } from "react";
import { socket } from "../socket";
import useLocalStorage from "./useLocalStorage";

export default function useWebSocket() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [sprite, setSprite] = useState("");
  const [images, setStorage] = useLocalStorage("Favorites", []);

  const handleFavorites = () => {
    if (images.length < 1) setStorage([sprite]);
    if (!images.includes(sprite) && sprite !== "") {
      const newImages = [...images]
      newImages.push(sprite)
      setStorage(newImages)
    }
  };

  const deleteFavorites = (id:string) => {
    if (images.length > 0) {
      const index = images.findIndex((img: string) => id === img)
      const newImages = [...images]
      newImages.splice(index, 1)
      setStorage(newImages)
    }
      
  }

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on("sprite", (data) => {
      setSprite(data);
      // otro user effect que espere que se escanee que cuando el localstorage se actualice
      // actualice el estado que va a mostrar la imagen
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [sprite]);

  const handleEmitMessage = () => {
    socket.emit("send-sprite", "");
  };

  return {
    images,
    isConnected,
    transport,
    sprite,
    deleteFavorites,
    setSprite,
    handleEmitMessage,
    handleFavorites,
  };
}
