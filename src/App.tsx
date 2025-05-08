import "./index.css";
import React from "react";

const App: React.FC = () => {
  const shortcuts = [
    "GitHub",
    "ChatGPT",
    "Conta Google",
    "Web Store",
    "Adicionar",
  ];

  return (
    <div className="container">
      <header className="top-bar">
        <a href="#">Gmail</a>
        <a href="#">Imagens</a>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_48dp.png"
          alt="Perfil"
          className="profile-icon"
        />
      </header>

      <main>
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="logo"
        />
        <div className="search-box">
          <input
            type="text"
            placeholder="Pesquise no Google ou digite um URL"
          />
          <div className="icons">
            <span>🔍</span>
            <span>🎤</span>
            <span>📷</span>
          </div>
        </div>
        <div className="shortcuts">
          {shortcuts.map((text) => (
            <div key={text} className="item">
              {text}
            </div>
          ))}
        </div>
      </main>

      <footer>
        <button>Personalizar o Chrome</button>
      </footer>
    </div>
  );
};

export default App;
