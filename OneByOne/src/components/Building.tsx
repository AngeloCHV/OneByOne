import { Link } from "react-router-dom";
import "../style/Building.css";

export const Building = ({ jeu }: { jeu: string }) => {
  return (
    <div className="construction">
      <div className="scanlines" />
      <main className="construction-main">
        <div className="construction-icon">⚙️</div>
        <h1 className="construction-title">{jeu}</h1>
        <p className="construction-sub">EN CONSTRUCTION</p>
        <div className="construction-bar">
          <div className="construction-progress" />
        </div>
        <p className="construction-msg">Ce jeu arrive bientôt...</p>
        <Link to="/" className="construction-back">← Retour</Link>
      </main>
    </div>
  );
};