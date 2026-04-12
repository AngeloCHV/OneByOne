import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/Home.css";

export const Home = ({ onStart }: { onStart: () => void }) => {
  const [toPlay, setToPlay] = useState<boolean>(false);

  const handleClick = () => {
    setToPlay(true);
    onStart();
  };

  return (
    <div className="home">
      <div className="scanlines" />
      <main className="home-main">
        <div className="title-wrapper">
          <h1 className="home-title">OneByOne</h1>
        </div>

        {toPlay ? (
          <div className="game-selector">
            <Link to="/Snake" className="game-card">
              <span className="game-icon">🐍</span>
              <span className="game-name">Snake</span>
              <span className="game-arrow">→</span>
            </Link>
            <Link to="/Pendu" className="game-card">
              <span className="game-icon">🪤</span>
              <span className="game-name">Pendu</span>
              <span className="game-arrow">→</span>
            </Link>
          </div>
        ) : (
          <button className="start-btn" onClick={handleClick}>
            <span>JOUER</span>
          </button>
        )}
      </main>
    </div>
  );
};