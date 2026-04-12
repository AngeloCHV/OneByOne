import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Snake } from "./pages/Snake";
import { Pendu } from "./pages/Pendu";
import "./style/App.css";
import { useRef } from "react";
import { sounds } from "./components/Sounds";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const jouerSon = () => {
    const jouerAleatoire = () => {
      const index = Math.floor(Math.random() * sounds.length);
      audioRef.current = new Audio(sounds[index]);
      audioRef.current.play();
      audioRef.current.onended = () => {
        setTimeout(jouerAleatoire, 5000);
      };
    };

    if (!audioRef.current) {
      jouerAleatoire();
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home onStart={jouerSon} />} />
        <Route path="/Snake" element={<Snake />} />
        <Route path="/Pendu" element={<Pendu />} />
      </Routes>
    </div>
  );
}
